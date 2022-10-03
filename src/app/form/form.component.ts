import { Component, OnInit } from '@angular/core';
import { Form } from '../form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formDetails: Form = {
    name: '',
    number: '',
    cvc: '',
    date: {
      month: '',
      year: '',
    },
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  constructor() {}

  ngOnInit(): void {}
}
