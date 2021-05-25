import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // // Inline styling using "styles" property
  // styles: [`
  //   h3 {
  //     color: teal;
  //   }
  // `]
})
export class AppComponent {
  // Data Binding -- aka binding the key value pairs to this component
  // so they can be referenced e.g. `{{ title }}` in app.component.html
  title = 'tcg-my-first-app';
  author = 'Walter';
}
