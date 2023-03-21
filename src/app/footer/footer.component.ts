import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  title = 'fileUpload';
  images: any = '';
  multipleImages = [];
  isLoggedIn3: boolean = false;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (localStorage.getItem('auth')) {
      this.isLoggedIn3 = true;
    }
  }

  /**
   *Upload resume
   */

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.images);

    this.http.post<any>('http://localhost:3000/file', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }
}
