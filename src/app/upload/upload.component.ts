import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  constructor() { }

  uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  options: Object = {
    url: 'http://app-http-service.dev/upload'
  };
  sizeLimit = 2000000;
 
  handleUpload(data): void {
    console.log('uploading...');
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
      console.log('done!');
    }
  }
 
  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  beforeUpload(uploadingFile): void {
    console.log('start upload...');
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      alert('File is too large');
    }
  }

  

}
