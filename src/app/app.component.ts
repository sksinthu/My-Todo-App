import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Task List';
  tasks:string[]=[]
  ngOnInit():void{
   if(  localStorage.getItem ('mytask')){
  this.tasks=JSON.parse(localStorage.getItem('mytask')!)
   }
 
  }}