import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeechComponent } from './speech/speech.component';
import { SpeechSearchComponent } from './speech/speech-search/speech-search.component';
import { SpeechSubmitComponent } from './speech/speech-submit/speech-submit.component';

const routes: Routes = [
	{
   path: "speech", component: SpeechComponent,
    children: [
      { path: '', redirectTo: 'speech', pathMatch: 'full' },
      { path: 'search', component: SpeechSearchComponent },
      { path: 'submit', component: SpeechSubmitComponent }
    ]
   },
	{path: "", redirectTo: '/speech', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
