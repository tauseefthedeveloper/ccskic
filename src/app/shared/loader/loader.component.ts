import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { LoaderService } from '../../service/loader.service';

@Component({
  selector: 'app-loader',
  imports: [NgClass],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
  isLoading: boolean = true;
  times:number=0;
  constructor(private loader:LoaderService){
    this.loader.loaderState$.subscribe((data)=>{
    })
    setTimeout(() => {
      this.isLoading=false;
    }, 1000);
  }
  
}
