import { Component, OnInit } from '@angular/core';
import { FormGroup, ValidationErrors, ValidatorFn, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public title: string;


  formContacto: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  constructor() {
    this.title = "Contacto";
  }

  ngOnInit(): void {
  }

  sendMail() {
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey("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")
    const msg = {
      to: 'demian.igi@gmail.com', // Change to your recipient
      from: 'demian.straga@gmail.com', // Change to your verified sender
      subject: 'contacto desde el briefcase',
      text: 'cualquier cosa',
      html: '<strong>cualquier cosa</strong>',
    }
    sgMail
      .send(msg)
      .then(() => {
       alert('Email sent')
      })
      .catch((error:any) => {
        alert(error)
      })
  }

}
