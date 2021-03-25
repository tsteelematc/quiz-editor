import {
  Component,
  OnInit
} from '@angular/core';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private quizSvc: QuizService // Service injected
  ) { }

  quizzes = [];

  ngOnInit() {
    this.quizzes = this.quizSvc.loadQuizzes(); // Service assigned to property
    console.log(this.quizzes);
  }

  title = 'quiz-editor';

  selectedQuiz = undefined;

  selectQuiz(q) {
    this.selectedQuiz = q;
  }
}
