import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'my-login-app';
  username: any;
  password: string;
  constructor( private router: Router) {}

  ngOnInit() {
  }
  authCheck() {
    if (this.username === 'demo' && this.password === 'demo') {
      console.log(this.username);
      this.router.navigateByUrl('/admin');
     }
    if (this.username === 'emp' && this.password === 'emp') {
      this.router.navigate(['/employee']);
      }
  }
}
