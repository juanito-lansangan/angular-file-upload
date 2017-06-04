import { Component, OnInit } from '@angular/core';
//import the file uploader plugin
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
//define the constant url we would be uploading to.
const URL = 'http://app-http-service.dev/upload';

@Component({
  selector: 'app-ng2-file-upload',
  templateUrl: './ng2-file-upload.component.html',
  styleUrls: ['./ng2-file-upload.component.css']
})
export class Ng2FileUploadComponent implements OnInit {

  //declare a property called fileuploader and assign it to an instance of a new fileUploader.
  //pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'file'});
  //This is the default title property created by the angular cli. Its responsible for the app works 
  title = 'Ng2 File upload app works!';

  ngOnInit() {
      //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
      this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
      //overide the onCompleteItem property of the uploader so we are 
      //able to deal with the server response.
      this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
          console.log("ImageUpload:uploaded:", item, status, response);
      };
  }

}
