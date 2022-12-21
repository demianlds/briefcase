import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { firstValueFrom } from 'rxjs';


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

  constructor(
    private http: HttpClient
  ) {
    this.title = "Contacto";
  }

  ngOnInit(): void {
  }

  async sendMail() {
    try {

      const apiUrl: string = "https://formspree.io/f/xdojbrln";

      const formData = new FormData();
      formData.append('email', this.formContacto.controls['email'].value);
      formData.append('phone', this.formContacto.controls['phone'].value);
      formData.append('description', this.formContacto.controls['description'].value);

      const headers = new HttpHeaders({
        'Accept': 'application/json'
      });

      await firstValueFrom(this.http.post(apiUrl, formData, { headers: headers }));
      alert("Mensaje enviado");
      this.formContacto.reset();

    } catch (e) {
      console.error(e);
      alert("Error");
    }
  }


}
