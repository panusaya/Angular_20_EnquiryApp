import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MasterService } from '../../Service/master-service.service';
import { DatePipe} from '@angular/common';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { HighlightDirective } from '../../Directives/highlight.directive';
import { AlertServiceService } from '../../Service/alert-service.service';
import { ConfirmAlertComponent } from '../../confirm-alert/confirm-alert.component';
import { ChildComponent } from '../child/child.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-enquiry-list-com',
  imports: [DatePipe, NgFor, HighlightDirective, ConfirmAlertComponent, ChildComponent,RouterLink, RouterLinkActive],
  templateUrl: './enquiry-list-com.component.html',
  styleUrl: './enquiry-list-com.component.css',
})
export class EnquiryListComComponent implements OnInit{
   @ViewChild(ConfirmAlertComponent) confirmBox!: ConfirmAlertComponent;

masterService = inject(MasterService);

alertService = inject(AlertServiceService);

getEnquiryList:any[]=[];
allEnquiryList: any[] = [];


constructor(private router: Router) {}

ngOnInit(): void {
  this.getEnquiry();
}

// getEnquiry(){
// this.masterService.getAllEnquiry().subscribe({
//   next : (result:any)=>{
//     this.getEnquiryList = result.data.sort(
//       (a: any, b: any) => b.enquiryId - a.enquiryId
//     );
   
//     console.log(result)

//   },  error:(err) => {
//         console.error(err);
//       }
// })
// }
getEnquiry() {
  this.masterService.getAllEnquiry().subscribe({
    next: (result: any) => {

      this.allEnquiryList = result.data.sort(
        (a: any, b: any) => b.enquiryId - a.enquiryId
      );

      this.getEnquiryList = [...this.allEnquiryList];
    },
    error: (err) => {
      console.error(err);
    }
  });
}

onEdit(item: any) {

  console.log(item);

  this.masterService.editEnquiryObj = { ...item };

  this.router.navigate(['/submit-enquiry']);
}

searchEnquiry(event: any) {
  const value = event.target.value.toLowerCase();

  this.getEnquiryList = this.allEnquiryList.filter((item: any) =>
    item.customerName.toLowerCase().includes(value)
  );

}

// onDelete(id: number) {

//   if (!confirm('Are you sure you want to delete this enquiry?')) {
//     return;
//   }

//   this.masterService.deleteEnquiry(id).subscribe({
//     next: () => {
//        this.alertService.show(
//         'Information Deleted Successfully',
//         'success'
//       );
//       this.getEnquiry(); // List refresh
//     },
//     error: (err) => {
//       console.error(err);
//     }
//   });
// }

onDelete(id: number) {

  this.confirmBox.open(
    'Are you sure you want to delete this enquiry?',
    (result: boolean) => {


      if (result) {


        this.masterService.deleteEnquiry(id).subscribe({

          next: () => {


            this.alertService.show(
              'Information Deleted Successfully',
              'success'
            );


            this.getEnquiry(); // List refresh


          },


          error: (err) => {

            console.error(err);

            this.alertService.show(
              'Delete Failed',
              'error'
            );

          }

        });


      }


    }
  );

}
}
