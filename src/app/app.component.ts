import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'briefcase';

  constructor(
    private router: Router,
    private elRef: ElementRef, // Inyección de dependencia para acceder al DOM
    private renderer: Renderer2 // Para manipular el DOM de manera segura
  ) { }

  ngOnInit(): void {
    if (this.router.url === '/') {
      this.router.navigate(['/portafolio']);
    }
  }

  ngAfterViewInit(): void {
    // Accede al botón y al menú de navegación
    const toggler = this.elRef.nativeElement.querySelector('.navbar-toggler');
    const navbarCollapse = this.elRef.nativeElement.querySelector('#navbarNav');

    if (toggler && navbarCollapse) {
      // Escucha el evento click en el botón y alterna la clase 'active'
      this.renderer.listen(toggler, 'click', () => {
        const isExpanded = navbarCollapse.classList.contains('active');
        
        if (isExpanded) {
          // Si está abierto, lo cierra
          this.renderer.removeClass(navbarCollapse, 'active');
          toggler.setAttribute('aria-expanded', 'false');
        } else {
          // Si está cerrado, lo abre
          this.renderer.addClass(navbarCollapse, 'active');
          toggler.setAttribute('aria-expanded', 'true');
        }
      });
    }
  }

  isActive(url: string): boolean {
    return this.router.url.includes(url);
  }
}
