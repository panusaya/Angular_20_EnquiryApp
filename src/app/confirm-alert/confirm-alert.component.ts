import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-confirm-alert',
  imports: [NgIf],
  templateUrl: './confirm-alert.component.html',
  styleUrl: './confirm-alert.component.css',
})
export class ConfirmAlertComponent {

  show=false;

message='';


confirmCallback:any;


open(message:string, callback:any){

this.message=message;

this.confirmCallback=callback;

this.show=true;

}



confirm(){

this.show=false;

this.confirmCallback(true);

}



cancel(){

this.show=false;

this.confirmCallback(false);

}

}
