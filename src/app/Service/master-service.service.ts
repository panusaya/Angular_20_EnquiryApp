import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IapiResponseModel } from '../Model/Interface/Master.model';

@Injectable({
  providedIn: 'root',
})
export class MasterService {

   editEnquiryObj: any = null;
  
  constructor(private http: HttpClient){

  }

  // getAllCategory(){
  //   return this.http.get('https://api.freeprojectapi.com/api/Enquiry/get-categories')
  // }

   getAllCategory(){
    return this.http.get<IapiResponseModel>('https://api.freeprojectapi.com/api/Enquiry/get-categories').pipe(
      map((response:IapiResponseModel) => response.data)
    )
  }

  getAllStatus(){
    return this.http.get<IapiResponseModel>('https://api.freeprojectapi.com/api/Enquiry/get-statuses').pipe(
      map((response:IapiResponseModel) => response.data)
    )
  }

  saveEnquiry(obj : any){
    return this.http.post('https://api.freeprojectapi.com/api/Enquiry/create-enquiry', obj)
  }

  getAllEnquiry(){
    return this.http.get('https://api.freeprojectapi.com/api/Enquiry/get-enquiries')
  }

  updateEnquiry(obj: any) {
  return this.http.put(
    `https://api.freeprojectapi.com/api/Enquiry/update-enquiry/${obj.enquiryId}`,
    obj
  );
}

deleteEnquiry(id: number) {
  return this.http.delete(
    `https://api.freeprojectapi.com/api/Enquiry/delete-enquiry/${id}`
  );
}
  
}
