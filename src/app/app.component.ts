import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'briefcase';

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.router.url === '/') {
      this.router.navigate(['/portafolio']);
    }
  }

  isActive(url: string): boolean {
    return this.router.url.includes(url);
  }
}
