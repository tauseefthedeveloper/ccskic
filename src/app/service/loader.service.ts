import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
   constructor() { }
    private loaderSubject = new Subject<{}>();
    loaderState$ = this.loaderSubject.asObservable();
  
    loadLoader(): void {
      this.loaderSubject.next({ });
    }
}
