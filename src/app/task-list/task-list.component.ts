import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  searchTest:any;
@Input()tasks:any
removetask(index:number){
  this.tasks.splice(index ,1)
  localStorage.setItem ('mytask',JSON.stringify(this.tasks))

}
}
