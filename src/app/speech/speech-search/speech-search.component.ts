import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SpeechService } from '../speech.service';

@Component({
  selector: 'app-speech-search',
  templateUrl: './speech-search.component.html',
  styleUrls: ['./speech-search.component.css']
})
export class SpeechSearchComponent implements OnInit {
	allSpeech = []
	currentSpeech = {}
	viewPage = false
	searchFilter = ''
  constructor(private speechService: SpeechService) { }

  ngOnInit() {
    this.speechService.allSpeech$.subscribe(value => {
      this.allSpeech = value
    })
  }

  viewSpeechDetail(i) {
  	this.viewPage = true
  	this.currentSpeech = this.allSpeech[i]
  }

  viewSpeech() {
  	this.viewPage = false
  }
}
