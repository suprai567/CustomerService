import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import Request, { ServiceType } from 'src/app/entity/Request';
import { RequestService } from 'src/app/services/request/request.service';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.scss']
})
export class CreateRequestComponent implements OnInit {
  request: Request = new Request(1,'John', 'Software Request', 'Open', 'User', ServiceType.LIVECHAT, new Date());
  form: any = {
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

  constructor(public requestService: RequestService, public appComponent: AppComponent) { 
    this.serviceList.push(this.serviceType.LIVECHAT);
    this.serviceList.push(this.serviceType.CHATBOX);
    this.serviceList.push(this.serviceType.PHONE);
    this.serviceList.push(this.serviceType.EMAIL);
    this.serviceList.push(this.serviceType.SELFSERVICE);
    this.serviceList.push(this.serviceType.SOCIALMEDIA);
    AppComponent.isInitialHome=false;
  }

  ngOnInit(): void {
  }

  createRequest(): void{
    console.log("clicked");
    const { customerName, summary, status, assignedGroup, serviceType, createdDate } = this.form;
    const observable = this.requestService.createRequest(customerName, summary, status, assignedGroup, serviceType, createdDate);
    observable.subscribe((response)=>{
      console.log(response);
      if(Number.isFinite(Number(response))){
        this.successMessage = "Request "+summary+" is submitted successfully";
        this.errorMessage = "";
      }
      else{
        this.errorMessage = JSON.stringify(response);
        this.successMessage = "";
      }
    },
    (error)=>{
      console.log("error :",error);
      if(error.status == 401){
        this.appComponent.logout();
      }
      if(error.status == 409){
        this.errorMessage = "Request summary "+summary+" is already used. Please use different summary to submit the request";
      }
      else{
        this.errorMessage = "Error occurred while requesting the ticket. Please verify the details and submit the request";
      }
      this.successMessage = "";
    })
  }

}
