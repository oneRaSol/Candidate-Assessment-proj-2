import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';

declare var $:any;

@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.scss']

})

export class LoginComponent implements OnInit {

  login:FormGroup|any;

  constructor(private _http:HttpClient, private _route:Router) { }

  ngOnInit(): void {

    this.login = new FormGroup({

      'email': new FormControl(),

      'password': new FormControl()

    })

  }

  logindata(login:FormGroup){

   // console.log(this.login.value);

    this._http.get<any>("http://localhost:3000/signup")

    .subscribe(res=>{

      const user = res.find((a:any)=>{

        return a.email === this.login.value.email && a.password === this.login.value.password

      });


      if(user){

        alert('Go to quiz.');

        this.login.reset();

        //const staff = localStorage.getItem('name');

        this.goQuiz();
      }else{
        $('.form-box').css('display','none');

        alert('User Not Found');

        this._route.navigate(['login']);

      }

    }, err=>{

      alert('Something was wrong');

    })

  }


goQuiz() {
  this._route.navigate(['/', 'welcome'])
    .then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
}




  sbtn1(){

    $('.form-box').css('display','none');

    $('.form-box1').css('display','block');

  }


}

