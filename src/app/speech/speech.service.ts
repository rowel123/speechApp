import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SpeechService {

  constructor(private http: Http) {}

  allSpeech$ = new BehaviorSubject<any>([])
  loaded$ = new BehaviorSubject<any>([])

  getAllSpeeches() {
  	this.loaded$.next(false)
    return this.http
      .get('http://localhost:4200/assets/jsonFiles/speeches.json')
      .map(response => response.json())
      .subscribe(response => {
        this.allSpeech$.next(response.speeches)
        this.loaded$.next(true)
        return response.speeches;
      },
      	error => console.log("JSON Data" + error)
      )
  }

  speechStateUpdate (data) {
  	this.allSpeech$.next(data);
  }

   eLogger (error: Response | any) {
    console.error('DataError::handleError', error);
    return Observable.throw(error);
  }
}
