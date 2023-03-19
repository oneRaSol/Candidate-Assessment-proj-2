import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {




  checkloggedin = localStorage.getItem('auth');

  constructor() { }


  ngOnInit(): void {

  let checkloggedin = localStorage.getItem('auth');

    throw new Error('Method not implemented.');


  }





}
