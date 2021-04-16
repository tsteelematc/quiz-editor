import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(builtInHttp: HttpClient) { }

  loadQuizzes() {
    const quizzes = [
        {
          name: "Quiz 1", 
          questions: [
              {
                  name: "Foo?"
              },
              {
                name: "Bar?"
            },
          ]
        }, 
        {
          name: "Quiz 2", 
          questions: [
            {
                name: "Why is Rigby the best cat?"
            },
            {
              name: "What's Tank's favorite toy?"
          },
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
