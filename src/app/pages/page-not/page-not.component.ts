import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not',
  imports: [],
  templateUrl: './page-not.component.html',
  styleUrl: './page-not.component.css'
})
export class PageNotComponent {
  isLoading: boolean = true;
  constructor(){
    setTimeout(() => {
      this.isLoading=false;
    }, 1000);
  }
}
