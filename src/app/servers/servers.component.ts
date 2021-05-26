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
  serverName: string = ''; // This obviously isn't necessary, but is left in as an example of two way binding
  serverCreated: boolean = false;
  servers = ['TestServer', 'TestServer2']

  constructor() {
    // Once this component is created, after two seconds, update the allowNewServer property to true
    // Since we have established a two-way binding between the disabled property for the `Add Server` button
    // and this.allNewServer, the Add Server button will be enabled two seconds after being loaded.

    // UPDATE: Commented out, since this functionality was replaced with something that makes more
    // sense -- the input is disabled when serverName is an empty string

    // setTimeout(() => {
    //     this.allowNewServer = true;
    // }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is " +  this.serverName;
  }

  onUpdateServerName(event: any) {
    let inputText = (<HTMLInputElement>event.target).value
    this.serverName = inputText;
  }

  resetServerName() {
    this.serverName = '';
  }
}
