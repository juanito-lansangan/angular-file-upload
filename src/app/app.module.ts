import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { Ng2UploaderModule } from 'ng2-uploader';
import { Ng2FileUploadComponent } from './ng2-file-upload/ng2-file-upload.component';
import { FileSelectDirective } from 'ng2-file-upload';


@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    Ng2FileUploadComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2UploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
