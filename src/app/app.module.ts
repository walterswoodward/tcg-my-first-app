import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AttributeComponent } from './attribute/attribute.component';
import { ClassComponent } from './class/class.component'; // Note the .ts extension is added by WebPack

// The NgModule decorator imported from angular's core
@NgModule({
  // You MUST register your modules here
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AttributeComponent,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
