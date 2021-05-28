import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent implements OnInit {
  showPassword: boolean = false;
  displayClicks = [];

  constructor() { }

  ngOnInit(): void {
  }

  logDisplayClick(timestamp) {
    this.displayClicks.push(
      {
        timestamp: timestamp,
      }
    );
  }

  onShowPassword(event) {
    this.showPassword = (this.showPassword === false);
    this.logDisplayClick(Math.round(event.timeStamp));
  }
}
