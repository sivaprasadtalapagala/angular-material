import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material-basics',
  templateUrl: './material-basics.component.html',
  styleUrls: ['./material-basics.component.scss']
})
export class MaterialBasicsComponent {
  constructor(
    private router:Router
  ){

  }
  goToCards(){
    this.router.navigate(['/cards'])
  }
}
