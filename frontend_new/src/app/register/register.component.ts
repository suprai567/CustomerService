import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {
    name: null,
    userName: null,
    mobileNo: null,
    address: null,
    state: null,
    country: null,
    emailId: null,
    password: null,
    admin: false,
    user: false
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  role: string[] = [];

  constructor(private authService: AuthService) {
    AppComponent.isInitialHome = false;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { name, userName, mobileNo, address, state, country, emailId, password, admin, user } = this.form;
    this.role = (admin && user) ? ["admin", "user"] : admin ? ["admin"] : user ? ["user"] : [];
    this.authService.register(name, userName, mobileNo, address, state, country, emailId, password, this.role).subscribe(
      response => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error => {
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
