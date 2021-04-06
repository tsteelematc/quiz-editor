import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  loadQuizzes() {
    const quizzes = [
        {
          name: "Quiz 1", 
          questions: [
            "Foo", 
            "Bar"
          ]
        }, 
        {
          name: "Quiz 2", 
          questions: [
            "Rigby", 
            "Tank"
          ]
        },
        {
            name: "Quiz 3", 
            questions: [
                
            ]
        }
    ]; 

    return quizzes; 
  }
}
