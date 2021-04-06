import { 
  Component
  , OnInit 
} from '@angular/core';

import { QuizService } from './quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private quizSvc: QuizService
  ) {}

  quizzes = [];

  errorLoadingQuizzes = false;
  loading = true;

  ngOnInit() {
    this.quizSvc
      .loadQuizzes()
      .subscribe(
        
        // Lamda with the data
        (data) => {
          console.log(data);
          this.quizzes = data;
          this.loading = false;
        }

        // Lamda with the errors, if errors exist
        , (err) => {
            console.error(err);
            this.loading = false;
            this.errorLoadingQuizzes = true;
        }

      )
    ;

    console.log(this.quizzes);
  }

  title = 'quiz-editor';

  selectedQuiz = undefined;

  selectQuiz(q) {
    this.selectedQuiz = q;
  }

  addNewQuiz() {

    const newQuiz = {
      name: "Untitled Quiz"
      , questions: []
    };

    this.quizzes = [
      ...this.quizzes
      , newQuiz
    ];

    this.selectQuiz(newQuiz);
  }

  jsPromisesOne() {
    const n = this.quizSvc.getMagicNumber(true);
    console.log(n); // ? ? ?

    n
      .then(
        number => {
          console.log(number);
          const n2 = this.quizSvc.getMagicNumber(true);
          console.log(n2); // ? ? ?

          n2
            .then(number2 => console.log(number2))
            .catch(err2 => console.error(err2))
        }
      )
      .catch(
        err => console.error(err)
      )
    ;
  }

  async jsPromisesTwo() {

    try {
      const n = await this.quizSvc.getMagicNumber(true);
      console.log(n); // ? ? ?

      const n2 = await this.quizSvc.getMagicNumber(true);
      console.log(n2); // ? ? ?
    }

    catch (err) {
      console.error(err);
    }
  }

  async jsPromisesThree() {
    try {
      const n = this.quizSvc.getMagicNumber(true);
      const n2 = this.quizSvc.getMagicNumber(true);

      //const foo = await Promise.all([n, n2]);
      const foo = await Promise.race([n, n2]);
      console.log(foo); // ? ? ?
    }
    catch (err) {
      console.error(err);
    }
  }
}
