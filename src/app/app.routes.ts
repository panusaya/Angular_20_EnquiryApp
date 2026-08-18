import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { SubmitEnquiryComponent } from './Pages/submit-enquiry/submit-enquiry.component';
import { HomeComponent } from './Pages/home/home.component';
import { EnquiryListComComponent } from './Pages/enquiry-list-com/enquiry-list-com.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { ChildComponent } from './Pages/child/child.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
     {
        path:'submit-enquiry',
        component:SubmitEnquiryComponent
    },
    {
    path: 'submit-enquiry/:id',
    component: SubmitEnquiryComponent
  },
     {
        path:'enquiry-list-com',
        component:EnquiryListComComponent
    },
      {
        path:'child',
        component:ChildComponent
    }
];
