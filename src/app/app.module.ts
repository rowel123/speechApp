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
import { ToastrModule } from 'ngx-toastr';

import {MatDialogModule} from '@angular/material/dialog';
import { ShareDialogComponent } from './dialogs/share-dialog/share-dialog.component';

import { SpeechService } from './speech/speech.service';
import { SpeechSearchPipe } from './pipes/speech-search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SpeechSubmitComponent,
    SpeechSearchComponent,
    SpeechComponent,
    SpeechSearchPipe,
    ShareDialogComponent,
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
    MatDialogModule,
    BsDatepickerModule.forRoot(),    
    TooltipModule.forRoot(),
    ToastrModule.forRoot()
  ],
  entryComponents: [ShareDialogComponent],
  providers: [SpeechService],
  bootstrap: [AppComponent]
})
export class AppModule { }
