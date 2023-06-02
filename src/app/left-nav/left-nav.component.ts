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
  goToLogin(){
    this.router.navigate(['leftnav/login'])
  }
  goToformfields(){
    this.router.navigate(['leftnav/formfields'])
  }
  goToDatepicker(){
    this.router.navigate(['leftnav/datepicker'])
  }
  goToCkeditor(){
    this.router.navigate(['leftnav/ckeditor'])
  }
}
