import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title:string;
  public subtitle:string;
  public web:string;

  constructor() { 
    this.title="Demian Perez Stragá";
    this.subtitle="Desarrollador web y coordinador en el Ministerio de Educación";
    this.web="www.demianpstraga.com.ar";
  }

  ngOnInit(): void {
  }

}
