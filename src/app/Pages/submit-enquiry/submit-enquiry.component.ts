import { Component, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MasterService } from '../../Service/master-service.service'; // <-- import कर
import { FormsModule } from '@angular/forms';
import { EnquiryModel } from '../../Model/class/Enquiry.Model';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { AlertServiceService } from '../../Service/alert-service.service';
import { HighlightDirective } from "../../Directives/highlight.directive";
import { Observable, Subscription } from 'rxjs';
import { ICategory, IStatus } from '../../Model/Interface/Master.model';
import { ConfirmAlertComponent } from '../../confirm-alert/confirm-alert.component';

@Component({
  selector: 'app-submit-enquiry',
   standalone: true,
  imports: [FormsModule, NgFor, NgIf, AsyncPipe],
  templateUrl: './submit-enquiry.component.html',
  styleUrl: './submit-enquiry.component.css',
})
export class SubmitEnquiryComponent implements OnInit, OnDestroy{
  @ViewChild(ConfirmAlertComponent) confirmBox!: ConfirmAlertComponent;
  

  masterService = inject(MasterService);

  alertService = inject(AlertServiceService);
  
  statusList:IStatus[]=[];
  categoryList:ICategory[]=[];
  messageError = '';
  
 $statusList : Observable<IStatus[]> = new  Observable<IStatus[]>;
 $categoryList : Observable<ICategory[]> = new Observable<ICategory[]>;

 subscription! : Subscription;

// newInquiryObj: any = {
//   "enquiryId": 0,
//   "customerName": "",
//   "customerEmail": "",
//   "customerPhone": "",
//   "message": "",
//   "categoryId": 0,
//   "statusId": 0,
//   "enquiryType": "",
//   "isConverted": false,
//   "enquiryDate": "",
//   "followUpDate": new Date,
//   "feedback": ""
// }

newInquiryObj : EnquiryModel = new EnquiryModel();

constructor(private router: Router) {
   this.$statusList = this.masterService.getAllStatus();
   this.$categoryList =  this.masterService.getAllCategory();
  }

  ngOnInit(): void {
    // this.getStatus();
    // this.getCategory();
    
    if (this.masterService.editEnquiryObj != null) {

    this.newInquiryObj = {
      ...this.masterService.editEnquiryObj
    };

    console.log(this.newInquiryObj);

  }
  }


  // getStatus() {
     
  //   this.masterService.getAllStatus().subscribe({
  //     next: (result: any) => {
  //       this.statusList = result.data;
  //       console.log(result);
  //     },
  //     error: (err) => {
  //       console.error(err);
  //     }
  //   });
  // }

  // getCategory(){
  //   this.masterService.getAllCategory().subscribe({
  //     next: (result:any)=>{
  //       this.categoryList =  result.data
  //       console.log(result);
  //     },
  //     error:(err) => {
  //       console.error(err);
  //     }
  //   })
  // }

  // onSaveEnquiry(){
  //  //this.newInquiryObj.statusId = '1';
  //   this.masterService.saveEnquiry(this.newInquiryObj).subscribe({
  //     next :(result:any)=>{
  //             console.log("Create Response =>", result);

  //     alert('Enquiry Added Successfully');  
  //     },
  //      error:(err) => {
  //       console.error('Alert Error From API');
  //     }
  //   })
  // }
// onSaveEnquiry() {
 
//   console.log("Sending Data =>", this.newInquiryObj);
//    this.newInquiryObj.statusId = '285';
//   this.masterService.saveEnquiry(this.newInquiryObj).subscribe({
//     next: (result: any) => {
//       console.log("API Success =>", result);
//       this.masterService.editEnquiryObj = null;
//       alert("Enquiry Added Successfully");
//     },
//     error: (err) => {
//       console.log("API Error =>", err);
//       console.log("Status =>", err.status);
//       console.log("Body =>", err.error);
//     }
//   });

// } 

// onUpdateEnquiry() {

//   console.log("Updating =>", this.newInquiryObj);

//   this.masterService.updateEnquiry(this.newInquiryObj).subscribe({
//     next: (result: any) => {
//       console.log("Update Response =>", result);
//        this.masterService.editEnquiryObj = null;
//       alert("Enquiry Updated Successfully");
//     },
//     error: (err) => {
//       console.error(err);
//       alert("Update Failed");
//     }
//   });

// }
  
onSaveEnquiry() {
  console.log("Sending Data =>", this.newInquiryObj);
  this.newInquiryObj.statusId = '285';

  this.subscription =this.masterService.saveEnquiry(this.newInquiryObj).subscribe({
    next: (result: any) => {
       this.alertService.show(
        'Information Saved Successfully',
        'success'
      );
      console.log("API Success =>", result);
      this.masterService.editEnquiryObj = null;
      //this.router.navigate(['/enquiry-list-com']);
    },
    error: (err) => {
       this.alertService.show(
        'Failed To Save Information',
        'error'
      );

      //console.log("API Error =>", err);
    }
  });
}

onUpdateEnquiry() {
  console.log("Updating =>", this.newInquiryObj);

  this.masterService.updateEnquiry(this.newInquiryObj).subscribe({
    next: (result: any) => {
      console.log("Update Response =>", result);
      this.masterService.editEnquiryObj = null;
       alert("Update Success");
      this.router.navigate(['/enquiry-list-com']);
    },
    error: (err) => {
      console.error(err);
      alert("Update Failed");
    }
  });
}

onCancelEnquiry(){
    this.confirmBox.open(
    'Are you sure you want to cancel this enquiry?',
    (result: boolean) => {

      if (result) {

        // Reset enquiry data
        this.newInquiryObj = new EnquiryModel();

        this.alertService.show(
          'Enquiry Cancelled Successfully',
          'success'
        );

      }

    }
  );
}

ngOnDestroy(): void {

if (this.subscription) {
  this.subscription.unsubscribe();
}
}

}