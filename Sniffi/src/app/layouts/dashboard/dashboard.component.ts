import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { RouterOutlet } from "@angular/router";
import { LeftSidebarComponent } from "../../shared/left-sidebar/left-sidebar.component";

@Component({
  selector: 'app-dashboard',
  imports: [
    NavbarComponent,
    RouterOutlet,
    LeftSidebarComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
