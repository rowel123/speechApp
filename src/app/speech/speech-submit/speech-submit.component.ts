import { Component, OnInit } from '@angular/core';
import { SpeechService } from './../speech.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-speech-submit',
  templateUrl: './speech-submit.component.html',
  styleUrls: ['./speech-submit.component.css'],
  providers: [DatePipe]
})
export class SpeechSubmitComponent implements OnInit {
	currentSpeech = {
		content: '',
		user_id: 1,
		author: '',
		keywords: [],
		date: this.formatDate(Date.now())
	}
	allSpeech = [];
  constructor(private speechService: SpeechService, private datePipe: DatePipe) { }

  ngOnInit() {
  	this.speechService.allSpeech$.subscribe(value => {
      this.allSpeech = value
    })
  }

  saveSpeech () {
    this.allSpeech.push(this.currentSpeech)
    this.speechService.speechStateUpdate(this.allSpeech)
  }

  formatDate (date) {
  	date = this.datePipe.transform(date, 'yyyy-MM-dd');
  }
}
