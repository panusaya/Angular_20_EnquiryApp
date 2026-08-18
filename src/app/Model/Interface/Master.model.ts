export interface IStatus {
    statusId: number;
    statusName: string;
    isActive: boolean;
}

export interface ICategory {
    categoryId: number;
    categoryName: string;
    isActive: boolean;
}

export interface IapiResponseModel {
    error : any[],
    result : boolean,
    data : any[],
    message : string
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data: any;
}