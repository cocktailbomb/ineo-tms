import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { ToastService } from '../../../services/core/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent implements OnInit, OnDestroy {

  constructor(public toastService: ToastService) {}
    
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.toastService.clear();
  }

  isTemplate(toast:any) { return toast.textOrTpl instanceof TemplateRef; }

}
