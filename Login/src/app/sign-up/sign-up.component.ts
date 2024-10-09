import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {   FormControl, FormsModule, ReactiveFormsModule, Validators, } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,]
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  email=new FormControl('',[Validators.required,Validators.email])
  password=new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)])
}





// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import {  FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-sign-in',
//   standalone: true,
//   imports: [FormsModule,CommonModule,ReactiveFormsModule,],
//   templateUrl: './sign-up.component.html',
//   styleUrl: './sign-up.component.css'
// })

