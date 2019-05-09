import { NgModule } from '@angular/core';
import { BrowserModule,  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeechSubmitComponent } from './speech/speech-submit/speech-submit.component';
import { SpeechSearchComponent } from './speech/speech-search/speech-search.component';
import { SpeechComponent } from './speech/speech.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TagInputModule } from 'ngx-chips';
import { TooltipModule } from 'ngx-bootstrap';
import {DataTableModule} from "angular2-datatable";

import { SpeechService } from './speech/speech.service';
import { SpeechSearchPipe } from './pipes/speech-search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SpeechSubmitComponent,
    SpeechSearchComponent,
    SpeechComponent,
    SpeechSearchPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TagInputModule,
    DataTableModule,
    BsDatepickerModule.forRoot(),    
    TooltipModule.forRoot()
  ],
  providers: [SpeechService],
  bootstrap: [AppComponent]
})
export class AppModule { }
