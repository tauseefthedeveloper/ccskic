import { Component } from '@angular/core';

@Component({
  selector: 'app-id-cards',
  imports: [],
  templateUrl: './id-cards.component.html',
  styleUrl: './id-cards.component.css'
})
export class IdCardsComponent {
  isLoading=true;
  constructor(){
    setTimeout(() => {
      this.isLoading=false;
    }, 1000);
  }
}
