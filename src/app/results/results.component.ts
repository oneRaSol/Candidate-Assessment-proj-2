import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { quiz } from '../quiz';
import { ResultsService } from '../services/results.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  title = 'Admin candidate quiz report';

  constructor(private rs : ResultsService, private _route:Router){}

  columns = ["Id","FirstName", "Correct Answers", "Incorrect Answers", "Questions Answered", "Points"];

  index = ["id", "name", "correctAnswer", "inCorrectAnswer", "currentQuestion", "points"];

  quizs : quiz[] = [];

  ngOnInit(): void {

       let staff = localStorage.getItem('name');

      if(staff != 'admin'){

         this.goLogin();
      }


    this.rs.getUsers().subscribe
    (
      (response)=>
      {
        this.quizs = response;
      },

      (error)=>
      {
        console.log("Error Occured : "+error);
      }
    )
  }

  goLogin() {
  this._route.navigate(['/', 'login'])
    .then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
}



}
