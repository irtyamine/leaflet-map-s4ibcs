import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  LeafletModule.forRoot(),
  NgxDaterangepickerMd.forRoot() ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
