import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

//   ngOnInit(): void {
//   }

//   loginClick= function () {
//         this.router.navigateByUrl('/login');
// };

//   signupClick= function () {
//         this.router.navigateByUrl('/signup');
// };

}
