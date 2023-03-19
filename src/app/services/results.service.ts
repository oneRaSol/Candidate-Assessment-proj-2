import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { quiz } from '../quiz';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private http : HttpClient) { }

  url : string  = "http://localhost:4000/results";

  getUsers()
  {
    return this.http.get<quiz[]>(this.url);
  }


}
