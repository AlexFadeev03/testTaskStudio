import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formComponent!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.formComponent = this.fb.group({
      firstName: [null, [Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(2)]],
      lastName: [null, [Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(2)]],
      streetL1: [null, [Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(2)]],
      streetL2: [null, [Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(2)]],
      city: [null, [Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(2)]],
      state: [null, [Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(2)]],
      zipCode: [null, [Validators.required, Validators.pattern('[0-9]{5}'), Validators.minLength(5), Validators.maxLength(5)]],
      phoneNum: [null, [Validators.required, Validators.pattern('[0-9]{3} [0-9]{3}-[0-9]{4}') ]],
      email: [null, Validators.email]})
  }

  printForm(){
    for (const [key, val] of Object.entries(this.formComponent.value)) {
      console.log(key, ': ', val)
    }
  }

  onSubmit():void{
    this.submitted = true
    let inputs = document.getElementsByTagName('INPUT')
    for (let i = 0; i < inputs?.length; i++) {

    }
    if(this.formComponent.invalid){
      alert(" NOT Submitted!");
      return
    }
    this.printForm();
    this.formComponent.reset()
    this.submitted = false;
    alert("Submitted!");

  }

  get firstName() {
     return this.formComponent.get('firstName')
  }
  get lastName() {
    return this.formComponent.get('lastName')
  }
  get streetL1() {
    return this.formComponent.get('streetL1')
  }
  get streetL2() {
    return this.formComponent.get('streetL2')
  }
  get city() {
    return this.formComponent.get('city')
  }
  get state() {
    return this.formComponent.get('state')
  }
  get zipCode() {
    return this.formComponent.get('zipCode')
  }
  get phoneNum() {
    return this.formComponent.get('phoneNum')
  }
  get email() {
    return this.formComponent.get('email')
  }
}

