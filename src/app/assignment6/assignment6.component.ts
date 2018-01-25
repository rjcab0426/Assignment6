import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment6',
  templateUrl: './assignment6.component.html',
  styleUrls: ['./assignment6.component.css']
})
export class Assignment6Component implements OnInit {
  
  title: string;
  name: string;

  constructor() { }

  ngOnInit() {
    this.title  = "Assignment 6.1"
    this.name = "Data Binding in Angular"
  }

}
