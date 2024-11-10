import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  registrationForm:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    userName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    mobile:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    checkbox: new FormControl(false, [Validators.requiredTrue])

  })

 
  onSubmit() {
    if (this.registrationForm.valid) {
      // Storing form data in local storage
      this.onRegister();
  
      console.log("Form submitted successfully", this.registrationForm.value);
      this.registrationForm.reset();
    } else {
      console.log("Form is invalid");
    }
  }

  onRegister(){
    const localStorageData=localStorage.getItem('registrationData');
    if(localStorageData!=null){
      const localArray=JSON.parse(localStorageData);
      localArray.push(this.registrationForm.value);
      localStorage.setItem("registrationData",JSON.stringify(localArray))
    }else{
      const localArray=[];
      localArray.push(this.registrationForm.value);
      localStorage.setItem("registrationData",JSON.stringify(localArray))
    }
  }
  
 

}
