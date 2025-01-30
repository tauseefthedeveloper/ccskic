import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertComponent } from "./shared/alert/alert.component";
import { LoaderComponent } from "./shared/loader/loader.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AlertComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StudentManagementSystem';
}
