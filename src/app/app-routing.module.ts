import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormulaComponent } from './formula/formula.component';
import { QuizComponent } from './quiz/quiz.component';


const routes: Routes = [
  
  {path:'formula', component: FormulaComponent},
  {path:'', component: QuizComponent},
  {path:'*', component: QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
