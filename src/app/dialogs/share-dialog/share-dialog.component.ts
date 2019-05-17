import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.css']
})
export class ShareDialogComponent implements OnInit {
	shareURL = window.location.href
  constructor(public dialogRef: MatDialogRef<ShareDialogComponent>, private toastr: ToastrService) { }

  ngOnInit() {
  }

  copyMessage() {
  	let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.value = this.shareURL;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.toastr.success('copied to clipboard!', 'Success...')
    this.dialogRef.close();
  }
}
