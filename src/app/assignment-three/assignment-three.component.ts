import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent implements OnInit {
  showPassword: boolean = false;
  displayClicks = [];
  displayClickCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  logDisplayClick(timestamp) {
    this.displayClickCount++;
    this.displayClicks.push(
      {
        timestamp: timestamp,
        count: this.displayClickCount,
        stripe: (this.displayClickCount % 2 === 0)
      }
    );
  }

  onShowPassword(event) {
    this.showPassword = (this.showPassword === false);
    this.logDisplayClick(Math.round(event.timeStamp));
  }


}
