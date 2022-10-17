import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../token-storage/token-storage.service';
import Request, { ServiceType } from 'src/app/entity/Request';
const API_URL = 'http://localhost:8083/requests';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  request: Request = new Request(1,'John', 'Software Request', 'Open', 'User', ServiceType.LIVECHAT, new Date());
  public request1: any;
  public user: any;
  constructor(public client: HttpClient, private tokenStorageService: TokenStorageService, private router: Router) {
    this.user = this.tokenStorageService.getUser();
  }

  createRequest(ticketId:number,customerName: string, summary: string, status: string, assignedGroup: string, serviceType: ServiceType, createdDate: Date) {
    this.request = new Request(ticketId,customerName, summary, status, assignedGroup, serviceType, createdDate);
    return this.client.post(API_URL, this.request);
  }

  getAllRequests() {
    return this.client.get(API_URL);
  }

  getRequestById() {
    const ticketId = this.user.id;
    return this.client.get(API_URL + "/ticket/" + ticketId + "/ticketbyId/");
  }
  //userId: number = 1;
  updateUserRequest(ticketId:number,customerName: string, summary: string, status: string, assignedGroup: string, serviceType: ServiceType, createdDate: Date) {
    this.request = new Request(ticketId,customerName, summary, status, assignedGroup, serviceType, createdDate);
    //const ticketId = this.user.id;
    return this.client.post(API_URL + "/ticket/" + this.request.ticketId + "/updateUserRequest/", this.request);
  }
  deleteRequest(){
    //const ticketId = this.user.id;
    return this.client.delete(API_URL + "/ticket/" + this.request.ticketId + "/deleteRequest");

  }

  redirectTologin(){
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

}
