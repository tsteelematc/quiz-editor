import { Component,
OnInit } from '@angular/core';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(    
    private quizSvc: QuizService
  ) {
  }

  quizzes =[];

  ngOnInit(){
    this.quizzes = this.quizSvc.loadQuizzes();
    console.log(this.quizzes);
  }

  title = 'quiz-editor';
  //toolTip = new Date().getSeconds() % 2 == 0 ? 'blue' : 'red';

  selectedQuiz = undefined;

  selectQuiz(quiz) {
    this.selectedQuiz = quiz;
    
  } //Can also do lambda, does the same thing
  // selectQuiz = (quiz) =>{...}
}
