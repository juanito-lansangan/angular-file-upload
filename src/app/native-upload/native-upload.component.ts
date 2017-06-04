import { Component, OnInit, ElementRef, Input } from '@angular/core';
//import the native angular http and respone libraries
import { Http, Response } from '@angular/http';
//import the do function to be used with the http library.
import "rxjs/add/operator/do";
//import the map function to be used with the http library
import "rxjs/add/operator/map";
const URL = 'http://app-http-service.dev/upload';

@Component({
  selector: 'app-native-upload',
  templateUrl: './native-upload.component.html',
  styleUrls: ['./native-upload.component.css']
})
export class NativeUploadComponent implements OnInit {
  title = 'No plugin file upload';

  //declare a constroctur, so we can pass in some properties to the class, which can be    //accessed using the this variable
  constructor(private http: Http, private el: ElementRef) {

  }

  ngOnInit() {
  }

  //the function which handles the file upload without using a plugin.
  upload() {
  //locate the file element meant for the file upload.
      let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
  //get the total amount of files attached to the file input.
      let fileCount: number = inputEl.files.length;
  //create a new fromdata instance
      let formData = new FormData();
  //check if the filecount is greater than zero, to be sure a file was selected.
    if (fileCount > 0) { // a file was selected
        //append the key name 'photo' with the first file in the element
        formData.append('file', inputEl.files.item(0));
        //call the angular http method
        this.http
        //post the form data to the url defined above and map the response. Then subscribe //to initiate the post. if you don't subscribe, angular wont post.
        .post(URL, formData)
        .map((res:Response) => res.json()).subscribe(
        //map the success function and alert the response
        (success) => console.log(success),
        (error) => console.error(error))
      }
    }
}
