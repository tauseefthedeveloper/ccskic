import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlertComponent } from "../../shared/alert/alert.component";
import { LoaderService } from '../../service/loader.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, AlertComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isLoading: boolean = true;

  constructor(private loader:LoaderService){
    loader.loadLoader();
    setTimeout(() => {
      this.isLoading=false;
    }, 1000);
  }
}
