import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'
import { SpeechService } from './speech.service';
import { Speech } from './speech';
import { Observable } from 'rxjs/Observable';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ShareDialogComponent } from '../dialogs/share-dialog/share-dialog.component';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.css'],
  providers: [SpeechService, DatePipe]
})
export class SpeechComponent implements OnInit {
  isRoot;
  ownSpeech = [];
  allSpeech$ = [];
  currentSpeech: Speech;
  currentIndex = 0;
  loaded = false;
  constructor(private router: Router, private speechService: SpeechService, private datePipe: DatePipe, private toastr: ToastrService, public dialog: MatDialog) { 
  	router.events.subscribe((val) => {
  		this.router.url == '/speech' ? this.isRoot = true : this.isRoot = false;
    });
    this.speechService.getAllSpeeches()
    this.speechService.loaded$.subscribe(value => { 
      this.loaded =  value
      if(this.loaded) { this.currentSpeech = this.allSpeech$[0] }
    })
  }

  ngOnInit() {
    this.speechService.allSpeech$.subscribe(value => {
      this.ownSpeech = []
      this.allSpeech$ = value
      this.getOwnSpeech(value)
    })
  }

  getOwnSpeech (data) {
    for(var i in data) {
      if (data[i].user_id === 1) {
        this.ownSpeech.push(data[i])
      }
    }
  }

  selectSpeech (i) {
    this.currentIndex = i;
    this.currentSpeech = this.ownSpeech[i]
  }

  deleteSpeech () {
    this.allSpeech$.splice(this.currentIndex,1)
    this.speechService.speechStateUpdate(this.allSpeech$)
    this.toastr.warning('delete success!', 'Deleted...')
  }

  updateSpeech () {
    for (var i in this.allSpeech$) {
      if (this.allSpeech$[i].id === this.currentSpeech.id) {
        this.allSpeech$[i] = this.currentSpeech
      }
    }
    this.speechService.speechStateUpdate(this.allSpeech$)
    this.toastr.success('update success!', 'Updated...')
  }

  openShareDialog(): void {
    const dialogRef = this.dialog.open(ShareDialogComponent, {});

    dialogRef.afterClosed().subscribe(result => { });
  }

}
