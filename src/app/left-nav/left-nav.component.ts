import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent {
  constructor(
    private router:Router
  ){

  }
  goToDashboard(){
    this.router.navigate(['leftnav/dashboard'])
  }
  goToInbox(){
    this.router.navigate(['leftnav/inbox'])
  }
  goToSettings(){
    this.router.navigate(['leftnav/settings'])
  }
}
