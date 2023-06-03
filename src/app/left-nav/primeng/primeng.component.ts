import { Component } from '@angular/core';
@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styleUrls: ['./primeng.component.scss']
})
export class PrimengComponent {
  items: any[]=[];

  selectedItem: any;

  suggestions: any[]=[];

  search(event:any) {
      this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
  }

}
