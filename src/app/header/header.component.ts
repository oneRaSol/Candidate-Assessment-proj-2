import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedInAuth:boolean = false;
  isLoggedInVisitor:boolean = false;

  constructor() { }


  ngOnInit(): void {

  if (localStorage.getItem('auth')){

      this.isLoggedInAuth = true;
  };



   const checkloggedin = localStorage.getItem('name');

  if (checkloggedin !== 'admin') {
      this.isLoggedInVisitor = true;
  }

    throw new Error('Method not implemented.');


  }





}
