import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // // An example of inlining template -- can also point to a file
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';

  constructor() {
    // Once this component is created, after two seconds, update the allowNewServer property to true
    // Since we have established a two-way binding between the disabled property for the `Add Server` button
    // and this.allNewServer, the Add Server button will be enabled two seconds after being loaded.
    setTimeout(() => {
        this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created!";
  }

}
