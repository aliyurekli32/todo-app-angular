import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  items=[
    {id:1,description:"Python"},
    {id:2,description:"Javascript"},
    {id:3,description:"Java"}
  ]
    
  
}
