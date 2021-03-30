import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  loadQuizzes() {
      const quizzesFromTheCloud = [
          {
              name: "Quiz 1",
              questions: [
                  "foo",
                  "bar"
              ]
          },
          {
              name: "Quiz 2",
              questions: []
          }
      ];

      return quizzesFromTheCloud;
  }
}
