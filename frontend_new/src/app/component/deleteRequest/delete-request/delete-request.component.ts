import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { RequestService } from 'src/app/services/request/request.service';
import Request,{ ServiceType } from 'src/app/entity/Request';

@Component({
  selector: 'app-delete-request',
  templateUrl: './delete-request.component.html',
  styleUrls: ['./delete-request.component.scss']
})
export class DeleteRequestComponent implements OnInit {
  request1: Request = new Request(1,'John', 'Software Request', 'Open', 'User', ServiceType.LIVECHAT, new Date());
  //request1 : any;
  form: any;
  successMessage: any = "";
  errorMessage: any = "";
  isSuccessful = false;

  constructor(public requestService: RequestService) { 
    AppComponent.isInitialHome=false;
    this.request1 = this.requestService.request1;
    this.form = this.request1;
  }

  ngOnInit(): void {
  }

  delete(): void{
    this.request1 = this.form;
    const observable = this.requestService.deleteRequest();
    observable.subscribe((response)=>{
      if(Number.isFinite(Number(response))){
        this.successMessage = "Delete is successful. Request "+this.request1.ticketId+" is removed from the list";
        this.errorMessage = "";
      }
      if(response == null){
        this.errorMessage = "Failed to delete the request.";
        this.successMessage = "";
      }
    },
    (error)=>{
      if(error.status == 400){
        this.requestService.redirectTologin();
      }
      this.errorMessage = "Failed to delete the request.";
      this.successMessage = "";
    })
  }
  

}
