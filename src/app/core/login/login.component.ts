import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMsgList:any;
  constructor(public router:Router) { }

  public login = new Login();
  ngOnInit() {
  console.log(this.login);
  }

  signIn(){

    let loginObj = this.login;
    this.errorMsgList = [];
    loginObj.userName === '' ? this.errorMsgList.push("Username is required"):'';
    loginObj.password === '' ? this.errorMsgList.push("Password is required"):'';

    if(this.errorMsgList.length===0)
    {

      if(loginObj.userName === 'abc' && loginObj.password === 'xyz')
      {
      this.router.navigateByUrl('/user');
      } 
    else{
      this.router.navigateByUrl("Invalid UserName or Password")
      }
    }
  } 
}