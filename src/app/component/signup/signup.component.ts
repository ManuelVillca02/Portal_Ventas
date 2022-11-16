import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      first_name:[''],
      last_name:[''],
      email:[''],
      password:[''],
      passwordConfirm:['']
    })
  }

  signUp(){
    this.http.post<any>("http://localhost:3500/crear-usuario", this.signupForm.value)
    .subscribe(res=>{
      if(this.signupForm.controls['password'].value==this.signupForm.controls['passwordConfirm'].value){
        if(res.isOk==true){
          alert("Signup Successfull");
          this.signupForm.reset();
          this.router.navigate(['login']);
        }else{
          alert(res.msj);
        }
      }else{
        alert("The passwords are not the same");
      }
      
      
    },err=>{
      alert("Something went wrong")
    })
  }

}
