import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  imports: [FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {

  contactObject: any ={
    name: '',
    email:'',
    message:''
  }

  sendMessage(){
    console.log(this.contactObject);
  }

  rollNo = 3;

 
}
