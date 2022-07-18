import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { users } from '../users';

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg:string;
  users:any;
  loginForm: FormGroup;
  constructor(private appService:AppService, private router:Router) { }

  ngOnInit(): void {
    this.users = users;
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }
  onFormSubmit=()=>{

    let username = this.loginForm.value.username;
     let password = this.loginForm.value.password;

    let user = this.users.find(u=> (u.username === username && u.password === password));
    if(user){
      localStorage.setItem("isLoggedIn","true");
      let token = btoa(username + ':' + password);
      localStorage.setItem("token", token);
      this.appService.loggedIn.next(true);
      this.router.navigateByUrl('/');
   }else{
      this.errorMsg = 'Invalid Credentials';
   }
  }

}
