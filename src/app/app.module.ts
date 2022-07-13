import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DisplayComponent } from '../display/display.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    { path: '', component: DisplayComponent }
  ]),
]
  declarations: [ AppComponent, HelloComponent, DisplayComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
