import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface SidebarToggleState {
  toggle:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private toggledSubject = new Subject<SidebarToggleState>();
  toggledState = this.toggledSubject.asObservable();
  toggled: boolean = true;

  constructor() { }

  toggle() {
    this.toggled = !this.toggled;
    this.toggledSubject.next(<SidebarToggleState>{toggle: this.toggled});
  }
}
