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
    this.loadQuizzesForDisplay();
    console.log(this.quizzes);
  }

  async loadQuizzesForDisplay() {
    try {
      this.quizzes  = await this.quizSvc.loadQuizzes();
      console.log(this.quizzes);
      this.loading = false;
    }

    catch (err) {
      console.error(err);
      this.errorLoadingQuizzes = true;
      this.loading = false;
    }
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

  removeQuestion(questionToRemove) {
    this.selectedQuiz.questions = this.selectedQuiz.questions.filter(x => x != questionToRemove);
  }

  addNewQuestion() {
    this.selectedQuiz.questions = [
      ...this.selectedQuiz.questions
      , {
        name: "Untitled Question"
      }
    ];    
  }

  jsPromisesOne() {
    
    const n = this.quizSvc.getMagicNumber(true);
    console.log(n); // ? ? ?

    // Promises are also called "thenables"... For a reason...
    n
      .then(number => {
        console.log(number); // ? ? ?

        const n2 = this.quizSvc.getMagicNumber(true);
        console.log(n2); // ? ? ?

        //const await = 43;

        n2
          .then(number => console.log(number))
          .catch(err => console.error(err))
        ;
      })
      .catch(err => {
        console.error(err)
      })
    ;
  }

  async jsPromisesTwo() {

    //const await = 12;

    try {
      const n = await this.quizSvc.getMagicNumber(false);
      console.log(n); // ? ? ?

      const n2 = await this.quizSvc.getMagicNumber(true);
      console.log(n2);
    }

    catch (err) {
      console.error(err);
    }
  }

  async jsPromisesThree() {

    const n = this.quizSvc.getMagicNumber(true);
    const n2 = this.quizSvc.getMagicNumber(true);

    console.log(n, n2); // ? ? ?

    try {
      //const foo = await Promise.all([n, n2]);
      const foo = await Promise.race([n, n2]);
      console.log(foo);
    }

    catch (err) {
      console.error(err);
    }
  }
}
