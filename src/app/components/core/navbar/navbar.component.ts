import { Component } from '@angular/core';
import { SidebarService } from '../../../services/core/sidebar.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private sidebarService: SidebarService,private router: Router) { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    this.sidebarService.toggle();
  }

  logout() {
    this.router.navigate(['/']);
  }
}
