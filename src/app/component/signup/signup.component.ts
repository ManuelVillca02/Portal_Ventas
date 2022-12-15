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
    let band = true;
      if(this.signupForm.controls['first_name'].value==''||this.signupForm.controls['last_name'].value==''||this.signupForm.controls['email'].value==''||this.signupForm.controls['password'].value==''||this.signupForm.controls['passwordConfirm'].value==''){
        alert("Ingrese datos");
        band=false;
      }
      if(band){
        this.http.post<any>("http://54.167.87.65:3500/crear-usuario", this.signupForm.value)
        .subscribe(res=>{
          
          if(this.signupForm.controls['password'].value==this.signupForm.controls['passwordConfirm'].value){
            if(res.isOk==true){
              alert("Registro Exitoso");
              this.signupForm.reset();
              this.router.navigate(['loginportal']);
            }else{
              alert(res.msj);
            }
          }else{
            alert("Las Contraseñas no Coinciden");
          }
          
          
        },err=>{
          alert("Something went wrong")
        })
      }
    
  }

}
