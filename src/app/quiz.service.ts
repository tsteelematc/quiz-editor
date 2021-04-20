import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private builtInAngularHttpSvc: HttpClient) { }

  loadQuizzes(): Observable<any[]> {
    

    return this.builtInAngularHttpSvc.get<any[]>("https://modern-js.azurewebsites.net/api/HttpTriggerJS1?code=8XD3vN3ehHLdZacBQJQhgUnNst9202gdd5VM3kWCytDkz2nXhia6kA==&name=Mystery%20Quiz"); 
  }

  getMagicNumber(makeSucceed: boolean): Promise<number> {
    return new Promise<number>(
        (resolve, reject) => {
            if (makeSucceed) {
                resolve(42);
            } else {
                reject("No magic numbers :(");
            }
        }
    ); 
  }
}
