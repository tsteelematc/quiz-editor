import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz-editor';

  titleColor = Date.now() % 2 == 0 ? 'red' : 'blue';

  titleTooltip = this.titleColor;

  titleTooltip2 = "Foo";
}
