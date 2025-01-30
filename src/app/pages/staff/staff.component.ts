import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-staff',
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})
export class StaffComponent {
  isLoading: boolean = true;

  constructor(){
    setTimeout(() => {
      this.isLoading=false;
    }, 1000);
  }
}
