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

  title = 'quiz-editor';
  selectedQuiz = undefined;
  quizzes =[];

  ngOnInit(){
    this.quizSvc.loadQuizzes().subscribe(
    (data) => {
      this.quizzes = data;
      console.log(this.quizzes);
    }
    ,(err)=> console.error(err)
    );
  }

  addNewQuiz() {
    const newQuiz = {name: "New Quiz", questions: ["foo","bar"]};
    this.quizzes.push(newQuiz);
    this.selectedQuiz = newQuiz;
  }

  selectQuiz(quiz) {
    this.selectedQuiz = quiz;    
  } //Can also do lambda, does the same thing
  // selectQuiz = (quiz) =>{...}
}
