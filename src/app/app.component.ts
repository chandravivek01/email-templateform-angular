import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email-form';
  email : string = '';

  constructor() {}

  onSubmit() {
    
  }
}
