import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ProfileComponent } from './profile/profile.component';
import { CreateRequestComponent } from './component/createRequest/create-request/create-request.component';
import { DeleteRequestComponent } from './component/deleteRequest/delete-request/delete-request.component';
import { GetAllRequestsComponent } from './component/getAllRequests/get-all-requests/get-all-requests.component';
import { GetRequestByIdComponent } from './component/getRequestById/get-request-by-id/get-request-by-id.component';
import { UpdateUserRequestComponent } from './component/updateUserRequest/update-user-request/update-user-request.component';

const routes:Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'createRequest', component: CreateRequestComponent},
  {path: 'getRequestById', component: GetRequestByIdComponent},
  {path: 'updateUserRequest', component: UpdateUserRequestComponent},
  {path: 'deleteRequest', component: DeleteRequestComponent},
  {path: 'getAllRequests', component: GetAllRequestsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    CreateRequestComponent,
    DeleteRequestComponent,
    GetAllRequestsComponent,
    GetRequestByIdComponent,
    UpdateUserRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
