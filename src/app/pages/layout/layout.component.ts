import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AlertComponent } from "../../shared/alert/alert.component";
import { AlertService } from '../../service/alert.service';
import { LoaderService } from '../../service/loader.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, NgIf, AlertComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  adminLogged:any;
  adminlocal:any;
  adminLoggedIn:boolean=false;
  isLoading: boolean = true;

  admin:any;
  constructor(private router: Router, private alertService:AlertService,private loader:LoaderService){
    this.adminlocal=localStorage.getItem('admin');
    this.adminLogged=JSON.parse(this.adminlocal);
    if(this.adminLogged==null){
      this.adminLoggedIn=true;
    }else{
      this.adminLoggedIn=false;
    }
    setTimeout(() => {
      this.isLoading=false;
    }, 1000);
  }

  onLogout(){
    this.alertService.showAlert("Logout Successfully!", 'bg-danger')
    this.loader.loadLoader();
    if(this.adminLoggedIn){
    }
    else{
      localStorage.setItem('admin','')
      this.router.navigateByUrl('/')
    }
  }
}
