import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  loadQuizzes() {
    const quizzesFromTheCloud = [
      {
        name: "Quiz Bear"
        , questions: [
          "Foo"
          ,"Bar"
        ]
      }
      ,{
        name: "Quiz Cat"
        , questions: [
          "Foo"
          ,"Bar"
        ]
      }
    ];
    return quizzesFromTheCloud;
  }
  

}
