import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Router';

  constructor() {}

  //lifecycle method - what to use most of the time for initializing
  ngOnInit(): void {}

  toggleAddTask() {
    console.log('toggle');
  }
}
