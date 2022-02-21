import { Component, InputDecorator, OnInit, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback | undefined;
  contactType = ContactType;
  @ViewChild('fform') feedbackFormDirective: FormGroupDirective | undefined;

  formError = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages = {
    'firstname': {
      'required': "First name is required",
      'minLength': "First name must be at least 2 characters long",
      'maxLength': "First name can't be more than 25 characters long"
    },
    'lastname': {
      'required': "Last name is required",
      'minLength': "Last name must be at least 2 characters long",
      'maxLength': "Last name can't be more than 25 characters long"
    },
      'telnum': {
        'required': "Tel.number is required",
        'pattern': "Tel.number must contain only numbers"
    },
      'email': {
        'required': "Email is required",
        'email': "Email is not in valid format"
      }
  };

  constructor(private fb: FormBuilder) { 
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: [0, [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contacttype: 'None',
      message: ''
    });

    this.feedbackForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set form validation messages
  }

  onValueChanged(data?: any) {
    if(!this.feedbackForm) {
      return;
    }

    const form = this.feedbackForm;
    for (const field in this.formError) {
      if(this.formError.hasOwnProperty(field)){
        
      }
    }
  }

  ngOnInit(): void {
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      telnum: [0, Validators.required],
      email: ['', Validators.required],
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
        firstname: '',
        lastname: '',
        telnum: 0,
        email: '',
        agree: false,
        contacttype: 'None',
        message: ''
      });
      this.feedbackFormDirective?.resetForm();
  }
}
