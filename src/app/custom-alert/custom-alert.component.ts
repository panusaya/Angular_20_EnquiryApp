import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertServiceService } from '../Service/alert-service.service';

@Component({
  selector: 'app-custom-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.css']
})
export class CustomAlertComponent {

  message = '';
  type = '';
  show = false;

  constructor(private alertService: AlertServiceService) {

    this.alertService.alert$.subscribe((data) => {

      this.message = data.message;
      this.type = data.type;
      this.show = true;

      //this.show = false;

    });

  }

  closeAlert(){

  this.show=false;

}

}