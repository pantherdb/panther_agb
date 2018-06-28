import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppDataLoader } from './services';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
    AppDataLoader
  ],
})
export class AgbCommonModule { }
