import { Component } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  items=[
    {id:1,description:"Python",completed:false},
    {id:2,description:"Javascript",completed:false},
    {id:3,description:"Java",completed:false}
  ] ;
  model = new Model
}
