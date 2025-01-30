import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../../service/alert.service';

@Component({
  selector: 'app-alert',
  imports: [FormsModule,CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {

  message: string = '';
  messageType:string='';
  showAlert: boolean = false;

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertService.alertState$.subscribe((alert) => {
      this.message = alert.message;
      this.messageType = alert.messageType;
      this.showAlert = true;

      // Auto-hide the alert after 5 seconds
      setTimeout(() => (this.showAlert = false), 5000);
    });
  }

  closeAlert(): void {
    this.showAlert = false;
  }
}
