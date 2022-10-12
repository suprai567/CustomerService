import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { RequestService } from 'src/app/services/request/request.service';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';

@Component({
  selector: 'app-get-all-requests',
  templateUrl: './get-all-requests.component.html',
  styleUrls: ['./get-all-requests.component.scss']
})
export class GetAllRequestsComponent implements OnInit {
  requests: any = [];
  message: any = "";
  displayedColumns: string[] = ['No.', 'customerName',  'Summary', 'Status', 'AssignedGroup', 'ServiceType', 'CreatedDate'];
  column: any ="";
  customerName : String = "";

  constructor(public requestService: RequestService, private router: Router, private tokenStorageService: TokenStorageService) {
    AppComponent.isInitialHome=false;
   }

  ngOnInit(): void {
    const user = this.tokenStorageService.getUser();
    this.customerName = user.name;
    console.log("user id: "+user.id);
    this.getAllRequests();
  }

  getAllRequests(){
    console.log("clicked");
    const observable = this.requestService.getAllRequests();
    observable.subscribe((requests)=>{
      console.log(requests);
      this.requests = requests;
      this.message = "";
    },
    (error)=>{
      if(error.status == 400){
        this.requestService.redirectTologin();
      }
      this.message = "No requests found for customer";
      this.requests = [];
      this.customerName = "";
    })
  }

  tableRowClicked(request: any){
    console.log("clicked");
    console.log(request);
    this.requestService.request1 = request; 
    this.router.navigate(['/updateUserRequest']);
  }

}



