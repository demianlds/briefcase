import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  public title:string;
  public subtitle:string;

  constructor() {
    this.title = "CV Perfil Profesional";
    this.subtitle = "Para descargar mi CV en formato PDF has click"
  }

  ngOnInit(): void {
  }

}
