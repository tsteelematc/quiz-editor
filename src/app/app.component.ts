import { 
  Component, 
  OnInit
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
  ) {
    
  }

  quizzes = []; 

  ngOnInit() {
    this.quizzes = this.quizSvc.loadQuizzes(); 
    // console.log(this.quizzes);
    
  }

  selectedQuiz = undefined; 

  selectQuiz(q) {
    this.selectedQuiz = q;
  }

  title = 'quiz-editor';

  addNewQuiz() {
    // add a new quiz to quizzes
    let newQuiz = {
      name: "Untitled Quiz", 
      questions: []
    }

    this.quizzes = [
        ...this.quizzes, 
        newQuiz
    ]; 
     
    // set the selectedQuiz to the newest quiz
    this.selectQuiz(newQuiz); 

  }
  
}
