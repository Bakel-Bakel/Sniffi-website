import { Component } from '@angular/core';
import { Router, Routes, RouterLink } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  imports: [RouterLink],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss'
})
export class LeftSidebarComponent {
  appRoutes: Routes = [];

  constructor(private router: Router) {
    const parent = this.router.config.find(r => r.path === '');
    this.appRoutes = (parent?.children || []).filter(r => !r.redirectTo);
  }
}
