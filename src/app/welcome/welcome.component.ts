import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  title = 'fileUpload';
  images: any = '';
  multipleImages = [];

  //user taking the quiz
  candidate = localStorage.getItem('name');


  @ViewChild('name') nameKey!: ElementRef;
  constructor(private http: HttpClient, private _route:Router){}



  ngOnInit(): void {
        let staff = localStorage.getItem('name');

      if(staff === 'admin'){

         this.goResults();
      }
  }

 /**
  *The quiz
 */
    startQuiz(){
      localStorage.setItem("name",this.nameKey.nativeElement.value);
    }

/**
 *Upload resume
*/

    onSubmit(){
      const formData = new FormData();
      formData.append('file', this.images);

      this.http.post<any>('http://localhost:3000/file', formData).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
    }


goResults() {
  this._route.navigate(['/', 'results'])
    .then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
}


}
