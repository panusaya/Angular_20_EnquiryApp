import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})
export class AlertServiceService {
  
  private alertSubject = new Subject<any>();

  alert$ = this.alertSubject.asObservable();

  show(message: string, type: string) {
    this.alertSubject.next({
      message,
      type
    });
  }
}
