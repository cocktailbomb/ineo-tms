import { Component, OnDestroy, OnInit } from '@angular/core';
import { SidebarService, SidebarToggleState } from '../../../services/core/sidebar.service';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  toggled:boolean = true;

  constructor(private sidebarService: SidebarService, private router:Router){
    this.sidebarService.toggledState.pipe(takeUntilDestroyed()).subscribe((state:SidebarToggleState)=>{
      this.toggled = state.toggle;
    });
  }

  toggle(){
    this.sidebarService.toggle();
  }
}
