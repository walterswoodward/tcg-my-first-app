import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // An example of inlining template -- can also point to a file
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
