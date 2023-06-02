import { Component } from '@angular/core';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.scss']
})
export class CkeditorComponent {
  editorContent = '';
  config = {
    toolbar: 'Basic'
  };
  //console editor data
  submit() {
    console.log(this.editorContent);
  }
}
