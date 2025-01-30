import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
  private alertSubject = new Subject<{message: string; messageType:string}>();
  alertState$ = this.alertSubject.asObservable();

  showAlert(message: string, messageType:string): void {
    this.alertSubject.next({ message, messageType });
  }
}
