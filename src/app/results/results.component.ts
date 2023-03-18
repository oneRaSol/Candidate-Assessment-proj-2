import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../services/results.service';
import { Users } from '../Users';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  title = 'Admin candidate quiz report';

  constructor(private rs : ResultsService){}

  columns = ["User Id", "First Name", "Last Name", "Email", "Mobile", "Salary"];

  index = ["id", "firstName", "lastName", "email", "mobile", "salary"];

  users : Users[] = [];

  ngOnInit(): void {
    this.rs.getUsers().subscribe
    (
      (response)=>
      {
        this.users = response;
      },

      (error)=>
      {
        console.log("Error Occured : "+error);
      }
    )
  }


}
