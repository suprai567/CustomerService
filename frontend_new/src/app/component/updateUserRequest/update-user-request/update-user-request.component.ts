import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import Request,{ ServiceType } from 'src/app/entity/Request';
import { RequestService } from 'src/app/services/request/request.service';

@Component({
  selector: 'app-update-user-request',
  templateUrl: './update-user-request.component.html',
  styleUrls: ['./update-user-request.component.scss']
})

export class UpdateUserRequestComponent implements OnInit {
  request: Request = new Request(1,'John', 'Software Request', 'Open', 'User', ServiceType.LIVECHAT, new Date());
  ticketId:number=0;
  form: any = {
    ticketId:this.request.ticketId,
    customerName:this.request.customerName,
    summary: this.request.summary,
    status: this.request.status,
    assignedGroup: this.request.assignedGroup,
    serviceType: this.request.serviceType,
    createdDate: null
  };

  serviceList: ServiceType[] = [];
  serviceType = ServiceType;
  successMessage: any = "";
  errorMessage: any = "";
  isSuccessful = false;
  
  constructor(public requestService: RequestService) { 
    this.serviceList.push(this.serviceType.LIVECHAT);
    this.serviceList.push(this.serviceType.CHATBOX);
    this.serviceList.push(this.serviceType.PHONE);
    this.serviceList.push(this.serviceType.EMAIL);
    this.serviceList.push(this.serviceType.SELFSERVICE);
    this.serviceList.push(this.serviceType.SOCIALMEDIA);
    AppComponent.isInitialHome=false;
    //this.request1 = this.requestService.request1;
    //this.form = this.request1;

  }
  ngOnInit(): void {
  }

  update(): void{
    console.log("clicked");
    //this.request1 = this.form;
    const { ticketId,customerName, summary, status, assignedGroup, serviceType, createdDate } = this.form;
    const observable = this.requestService.updateUserRequest(ticketId, customerName, summary, status, assignedGroup, serviceType, createdDate);
    //const observable = this.requestService.updateUserRequest(this.request,this.ticketId);
    observable.subscribe((response)=>{
      console.log(response);
      if(Number.isFinite(Number(response))){
        if(Number(response) == 0){
          this.errorMessage = "Error occurred while updating the request. Please verify the details and update the request";
          this.successMessage = "";
        }
        else{
          this.successMessage = "Request "+summary+" is updated successfully";
          this.errorMessage = "";
        }
      }
      else{
        this.errorMessage = JSON.stringify(response);
        this.successMessage = "";
      }
    },
    (error)=>{
      console.log("error :",error);
      if(error.status == 400){
        this.requestService.redirectTologin();
      }
      this.errorMessage = "Error occurred while updating the request. Please verify the details and update the request";
      this.successMessage = "";
    })
  }

}
