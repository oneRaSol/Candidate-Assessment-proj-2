import { Component, OnInit } from '@angular/core';
import { quiz } from '../quiz';
import { ResultsService } from '../services/results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  title = 'Admin candidate quiz report';

  constructor(private rs : ResultsService){}

  columns = ["Std Id","FirstName", "Correct Answers", "Incorrect Answers", "Questions Answered", "Points"];

  index = ["id", "name", "correctAnswer", "inCorrectAnswer", "currentQuestion", "points"];

  quizs : quiz[] = [];

  ngOnInit(): void {
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


}
