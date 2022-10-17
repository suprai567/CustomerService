import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  static isInitialHome =true;
  referenceName = AppComponent;
  private roles: string[] = [];
  isLoggedIn = false;
  showCreateRequest = false;
  showAllRequests = false;
  showUpdatedUserRequest= false;
  showDeletedRequest= false;
  username?: string;

  constructor(private router: Router, private tokenStorageService: TokenStorageService) { 
    AppComponent.isInitialHome=true;
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showCreateRequest = this.roles.includes('ROLE_ADMIN');
      this.showAllRequests = this.roles.includes('Role_ADMIN');
      this.showUpdatedUserRequest = this.roles.includes('Role_ADMIN')
      this.showDeletedRequest=this.roles.includes('Role_ADMIN')

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
