import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  formValid: any = true;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.formValid = form.valid;
    console.log(form.value);
    if (form.valid) {
      // rubric60 The send button should create an alert based on the message sent
      alert('Your message details:\n'
        + form.value.name + '\n'
        + form.value.email + '\n'
        + form.value.subject + '\n'
        + form.value.message + '\n');
    }
  }
}
