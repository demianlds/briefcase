import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  public title:string;

  constructor() {
    this.title = "Experiencia";
  }

  ngOnInit(): void {
  }

}
