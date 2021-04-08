import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
}
