import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  testForm: any = {
    f_name: 'test-f-name',
    l_name: 'test-l-name',
    street_l1: 'test-street-l1',
    street_l2: 'test-street-l2',
    city: 'New York',
    state: 'NY',
    zip_code: '13456',
    ph_num: '063 808-6668',
    email: 'email@example.com'}
  constructor() {

  }

  ngOnInit(): void {

  }

}

