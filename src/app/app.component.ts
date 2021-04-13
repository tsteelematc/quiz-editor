import { 
  Component
  , OnInit 
} from '@angular/core';

import { QuizService } from './quiz.service';

interface QuizDisplay {
  name: string;

  // questions: {
  //   name: string;
  // }[];

  questions: QuestionDisplay[];

  markedForDelete: boolean;

  newlyAdded: boolean;

  naiveCheckSum: string;

}

// Type definitions are almost identical to interfaces...
type QuestionDisplay = {
  name: string;
}

//type Foo = "Bar" | "Cat";
//const myFoo: Foo = "Dog";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private quizSvc: QuizService
  ) {}

  quizzes: QuizDisplay[] = [];
  errorLoadingQuizzes = false;
  loading = true;

  ngOnInit() {
    this.loadQuizzesForDisplay();
    console.log(this.quizzes);
  }

  generateCheckSum(q): string {
    return q.name + q.questions.map(x => "~" + x.name).join('');
  }

  async loadQuizzesForDisplay() {
    try {
      this.quizzes = (await this.quizSvc.loadQuizzes()).map(x => ({
        name: x.name
        , questions: x.questions
        , markedForDelete: false
        , newlyAdded: false
        , naiveCheckSum: this.generateCheckSum(x)
      }));
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

  selectedQuiz: QuizDisplay = undefined;

  selectQuiz(q) {
    this.selectedQuiz = q;
  }

  addNewQuiz() {

    const newQuiz = {
      name: "Untitled Quiz"
      , questions: []
      , markedForDelete: false
      , newlyAdded: true
      , naiveCheckSum: ""
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

  cancelAllChanges() {
    this.loadQuizzesForDisplay();
    this.selectedQuiz = undefined;
  }

  get deletedQuizCount() {
    return this.getDeletedQuizzes().length;
  }

  getDeletedQuizzes() {
    return this.quizzes.filter(x => x.markedForDelete);
  }

  get deletedQuizToolTip() {
    return `${this.deletedQuizCount} ${this.deletedQuizCount == 1 ? "quiz" : "quizzes"} will be deleted`;
  }

  get newlyAddedQuizCount() {
    return this.getNewlyAddedQuizCount().length
  }

  get newlyAddedQuizToolTip() {
    return `${this.newlyAddedQuizCount} ${this.newlyAddedQuizCount == 1 ? "quiz" : "quizzes"} will be added`;
  }

  getNewlyAddedQuizCount() {
    return this.quizzes.filter(x => x.newlyAdded && !x.markedForDelete);
  }

  get editedQuizCount() {
    return this.getEditedQuizzes().length;
  }

  getEditedQuizzes() {
    return this.quizzes.filter(x => !x.markedForDelete && !x.newlyAdded && this.generateCheckSum(x) != x.naiveCheckSum)
  }

  get editedQuizToolTip() {
    return `${this.editedQuizCount} ${this.editedQuizCount == 1 ? "quiz" : "quizzes"} will be edited`;
  }
  
}
