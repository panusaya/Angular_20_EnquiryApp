import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertServiceService } from '../../Service/alert-service.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  loginObj:any = {
    userName :'',
    password:''
  }

  router = inject(Router)
   alertService = inject(AlertServiceService);

  onLogin(){
    if(this.loginObj.userName == 'Admin' && this.loginObj.password == '112233') {
      //this.alertService.show('LoginSuccess');
       this.alertService.show(
        'Login Successfully',
        'success'
      );
      localStorage.setItem('enquiryApp', 'admin')
      this.router.navigateByUrl("/enquiry-list-com")
    } else{
      alert('Wrong Credentials')}
  }
}
