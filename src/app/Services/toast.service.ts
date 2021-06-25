import { Injectable, TemplateRef  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: any[] = [];

  // Push new Toasts to array with content and options
  // tslint:disable-next-line:typedef
  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  // Callback method to remove Toast DOM element from view
  // tslint:disable-next-line:typedef
  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
