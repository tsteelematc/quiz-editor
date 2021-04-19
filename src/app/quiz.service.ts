import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface QuirkyShapeForSavingEditedQuizzes {
      quiz: string;
      questions: { question: string; }[];
}
​
export interface QuirkyShapeForSavingNewQuizzes {
      quizName: string;
      quizQuestions: string[];
}

@Injectable({
    providedIn: 'root'
})

export class QuizService {
      constructor(private builtInAngularHttpSvc: HttpClient) { }
      loadQuizzes(): Promise<any[]> {
          return this.builtInAngularHttpSvc.get<any[]>("https://modern-js.azurewebsites.net/api/HttpTriggerJS1?code=8XD3vN3ehHLdZacBQJQhgUnNst9202gdd5VM3kWCytDkz2nXhia6kA==&name=Mystery%20Quiz").toPromise();
      }

      getMagicNumber(makeThisPromiseSucceed: boolean): Promise<number> {
        return new Promise<number>(
          (resolve, reject) => {

            // Long running operation here ! ! !
            if (makeThisPromiseSucceed) {
              resolve(42);
            }
            else {
              reject("There are no magic numbers!");
            }
          }
        );
      }

      saveQuizzes(changedQuizzes: QuirkyShapeForSavingEditedQuizzes[],
                 newQuizzes: QuirkyShapeForSavingNewQuizzes[] = []) {

            let h = new HttpHeaders({
              'Content-Type': 'application/json'
              , 'X-Sas-Token': 'sig=K2WE6NQPtyoV6ke5hwPEaEaW52fgvyFWUeCEdPJls1s'
            });

            //console.log(h);

            return this.builtInAngularHttpSvc.post(
              'https://modern-js.azurewebsites.net/save-quizzes-proxy'
              , JSON.stringify(
                {
                  "changedQuizzes": changedQuizzes
                  , "newQuizzes": newQuizzes
                }
              )
              , {
                headers: h
              }
            ).toPromise();
      }
}
