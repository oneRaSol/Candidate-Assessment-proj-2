import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn:boolean = false;
  isLoggedIn2:boolean = false;
  constructor() { }


  ngOnInit(): void {

  if (localStorage.getItem('auth')){

      this.isLoggedIn2 = true;
  };



   const checkloggedin = localStorage.getItem('name');

  if (checkloggedin === 'admin') {
      this.isLoggedIn = true;
  }

    throw new Error('Method not implemented.');


  }





}
