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
