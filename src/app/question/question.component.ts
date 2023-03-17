import { HttpClient, HttpHeaders } from '@angular/common/http';
//import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from '../services/question.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  public name: string = "";
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  public id: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted : boolean = false;
  constructor(private questionService: QuestionService, private _http:HttpClient) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
  }
  getAllQuestions() {
    this.questionService.getQuestionJson()
      .subscribe(res => {
        this.questionList = res.questions;
      })
  }
  nextQuestion() {
    this.currentQuestion++;
  }
  previousQuestion() {
    this.currentQuestion--;
  }
  answer(currentQno: number, option: any) {

    if(currentQno === this.questionList.length){
      this.isQuizCompleted = true;

      if (this.isQuizCompleted = true) {

        interface results {
            id: number,
            name: string;
            CorrectAnswer: number,
            inCorrectAnswer: number,
            points: number,
            currentQuestion: number
        }

        const obj = {
          id: this.id,
          name: this.name,
          CorrectAnswer: this.correctAnswer,
          inCorrectAnswer: this.inCorrectAnswer,
          points: this.points,
          currentQuestion: this.currentQuestion
  };


        let body = JSON.stringify(obj);
        // const headers = new HttpHeaders({
        //       'Content-Type':'application/json; charset=utf-8',
        //     });
      const httpOptions : Object = {
        headers: new HttpHeaders({
          'Accept': 'text/html',
          'Content-Type': 'text/plain; charset=utf-8'
        }),
       responseType: 'text' as 'json'
      };

          //const requestOptions = { headers: headers };

            this._http.post("http://localhost:3000/results",body, httpOptions)
                  .subscribe((res: any) => {
                  alert('data added successfully');
              }, err=>{
                alert('Something went wrong');
              })}


      this.stopCounter();
    }
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);

    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.inCorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);

      this.points -= 10;
    }
  }
  startCounter() {
    this.interval$ = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.currentQuestion++;
          this.counter = 60;
          this.points -= 10;
        }
      });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }
  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }
  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = "0";
  }
  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    console.log(this.progress);
    return this.progress;
  }
}
