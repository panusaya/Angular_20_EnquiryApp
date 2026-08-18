import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CustomAlertComponent } from './custom-alert/custom-alert.component';
import { ConfirmAlertComponent } from './confirm-alert/confirm-alert.component';
import { AlertServiceService } from './Service/alert-service.service';

@Component({ 
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink, RouterLinkActive, CustomAlertComponent,ConfirmAlertComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
 @ViewChild(ConfirmAlertComponent) confirmBox!: ConfirmAlertComponent;

  title = 'angular20Project';

  alertService = inject(AlertServiceService);

  constructor(private router : Router){};

  ngOnInit(): void {
    
  }

    get isLoggedIn(): boolean {
    return localStorage.getItem('enquiryApp') === 'admin';
  }

  logout(){
     this.confirmBox.open(
    'Are you sure you want to delete this enquiry?',
    (result: boolean) => {

      if (result) {
        localStorage.removeItem('enquiryApp');
    this.alertService.show( 
        'Logged Out',
        'success'
      );
    this.router.navigateByUrl('/login')
      }

    }
  )
   
  }
}
