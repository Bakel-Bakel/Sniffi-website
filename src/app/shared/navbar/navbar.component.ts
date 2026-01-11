import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  currentRoute: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // Get initial route
    this.currentRoute = this.router.url;

    // Subscribe to route changes
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }
}
