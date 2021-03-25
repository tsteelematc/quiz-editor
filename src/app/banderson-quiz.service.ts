import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BandersonQuizService {

  constructor() { }

  loadQuizzes() {
    const quizzesFromTheCloud = [
      {
        name: "Beck's Quiz"
        , questions: [
          "Foo"
          , "Bar"
        ]
      }
      , {
        name: "Another Quiz"
        , questions: []
      }
    ];

    return quizzesFromTheCloud;
  }

}
