import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as ClassicEditor from '../../assets/js/ck-editor-math-type/ckeditor.js';
import { Router } from '@angular/router';
import { MathContent } from '../math/math-content.js';

declare var CKEDITOR;

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent implements OnInit, AfterViewInit {

  public Editor = ClassicEditor;
  load = false;
  imgSrc = "https://latex.codecogs.com/gif.latex?";
  latexCode = "";
  loadImage = false;
  public model = {
    editorData: '<p></p>'
  };
  mathMl: MathContent = {
   latex: ``
  };
  showLatex = false;
  latexVal = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  public onReady(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
    
  }

  redirectToQuiz() {
    this.router.navigate(['/']);
  }

  changeLatex() {
    this.showLatex = false;
    setTimeout(() => {
      this.mathMl.latex = this.latexVal.replace(/\\\\/g, `\\`).replace(/\\\(/g, `$$`).replace(/\\\)/g, `$$`);
      this.showLatex = true; 
      setTimeout(() => {
        let latexText = this.latexVal;
        let updatedLatex = '';
        for(let i = 0 ; i <  document.getElementsByClassName("mjx-chtml").length ; i++) {
          updatedLatex = "\\\\(" + latexText.split("\\(")[1].split("\\)")[0] + "\\)";
          latexText = latexText.replace(updatedLatex, document.getElementsByClassName("mjx-chtml")[i].getAttribute("data-mathml")) ;
        }
        this.model.editorData = "<p>" + latexText.replace(/\\\\/g, `\\`).replace(/\\n/g, `<br/>`) + "</p>";
      }, 1000);
    }, 500);
 
  }
}
