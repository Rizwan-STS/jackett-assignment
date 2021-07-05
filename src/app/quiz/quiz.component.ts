import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions = [
    {
      "question": "If 5x plus 32 equals 4 minus 2x what is the value of x",
      options: [
        {
          "name": "A",
          "value": "1"
        },
        {
          "name": "B",
          "value": "2"
        },
        {
          "name": "C",
          "value": "3"
        },
        {
          "name": "D",
          "value": "4"
        }
      ]
    }, {
      "question": "Which of the following numbers is farthest from the number 1 on the number line?",
      options: [
        {
          "name": "-10",
          "value": "-10"
        },
        {
          "name": "-5",
          "value": "5"
        },
        {
          "name": "-3",
          "value": "-3"
        },
        {
          "name": "21",
          "value": "21"
        }
      ]
    }, {
      "question": "A car got 33 miles per gallon using gasoline that cost $2.95 per gallon. Approximately what was the cost, in dollars, of the gasoline used in driving the car 350 miles?",
      options: [
        {
          "name": "$10",
          "value": "10"
        },
        {
          "name": "$20",
          "value": "20"
        },
        {
          "name": "$40",
          "value": "40"
        },
        {
          "name": "$50",
          "value": "50"
        }
      ]
    }
  ]
  
  ngOnInit(): void {
  }
  constructor(private router:Router) {
    
  }
  
  addOption(index) {
    let newOption = {
      "name": "",
      "value": ""
    }
    this.questions[index].options.push(newOption);
  }

  deleteOption(index, optionIndex) {
    if (index !== -1) {
      this.questions[index].options.splice(optionIndex, 1);
    }
  }
  
  deleteQuestion(index) {
    if (index !== -1) {
      this.questions.splice(index, 1);
    }
  }

  redirectToFormula() {
    this.router.navigate(['/formula']);
  }
}
