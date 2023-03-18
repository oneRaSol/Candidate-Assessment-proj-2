import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../Users';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private http : HttpClient) { }

  url : string  = "http://localhost:3000/Users";

  getUsers()
  {
    return this.http.get<Users[]>(this.url);
  }


}
