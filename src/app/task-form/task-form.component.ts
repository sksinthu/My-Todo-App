import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
@Input()tasks:any
Newtask:string='';
AddTodo(){
  this.tasks.unshift(this.Newtask),
  localStorage.setItem ('mytask',JSON.stringify(this.tasks))
  this.Newtask='';
}
}
