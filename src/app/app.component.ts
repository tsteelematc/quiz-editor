import { Component, OnInit } from '@angular/core';
import { BandersonQuizService } from './banderson-quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private quizSvc: BandersonQuizService
  ) {}

    quizzes = [];

  ngOnInit() {
    this.quizzes = this.quizSvc.loadQuizzes();
  }

  title = 'quiz-editor';
}
