import { Component, OnInit } from '@angular/core';
import { Form } from '../form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent implements OnInit {
  formDetails: Form = {
    name: '',
    number: 0,
    cvc: 0,
    date: {
      month: 0,
      year: 0,
    },
  };
  constructor() {}

  ngOnInit(): void {}
}
