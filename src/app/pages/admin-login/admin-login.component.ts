import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { AlertService } from '../../service/alert.service';
import { AlertComponent } from "../../shared/alert/alert.component";
import { LoaderService } from '../../service/loader.service';

@Component({
  selector: 'app-admin-login',
  imports: [FormsModule, CommonModule, AlertComponent],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  adminStr:any;
  passwordFieldType: string = 'password';
  adminLocal: any = {
    username: '',
    password: ''
  }
  notificationService: any;
  adminData:any={
    username:'admin',
    password:'admin@123',
  }

  constructor(private router: Router,private alertService: AlertService,private loader:LoaderService) {
    loader.loadLoader();
  }
  onLogin(loginForm: any) {
    if (loginForm.valid) {
      if ((this.adminLocal.username == this.adminData.username) && (this.adminData.password == this.adminLocal.password)) {
        this.alertService.showAlert("Login Successfull!","bg-success")
        this.adminStr=JSON.stringify(this.adminData)
        localStorage.setItem('admin',this.adminStr)
        this.adminData.isAdminLogged = true;
        this.router.navigateByUrl('/layout/home')
      }
      else {
        if (this.adminLocal.username != this.adminData.username) {
          this.alertService.showAlert("Please enter correct Username!","bg-danger")
        }
        else {
          this.alertService.showAlert("Please enter correct Password!","bg-danger")
        }
        this.router.navigateByUrl('/')
      }
    }
  }
  togglePasswordVisibility() {
    if (this.passwordFieldType === 'password') {
      this.passwordFieldType = 'text';
    } else {
      this.passwordFieldType = 'password';
    }
  }

}
