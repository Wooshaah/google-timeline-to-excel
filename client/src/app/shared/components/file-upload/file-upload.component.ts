import { Component, EventEmitter, Output } from '@angular/core';
import { ReadFile, ReadMode } from 'ngx-file-helpers';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  @Output() fileUploaded: EventEmitter<File> = new EventEmitter<File>();

  readMode: ReadMode = ReadMode.text;

  uploading: boolean = false;
  uploaded: boolean = false;
  uploadedFile: File = undefined;

  constructor() {}

  filePick(readFile: ReadFile) {
    this.uploadedFile = readFile.underlyingFile;
    this.fileUploaded.emit(this.uploadedFile);
  }

  readStart($event: number) {
    this.uploading = true;
    this.uploaded = false;
  }

  readEnd($event: number) {
    this.uploading = false;
    this.uploaded = true;
  }
}
