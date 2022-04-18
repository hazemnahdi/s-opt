
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthServiceService } from './services/auth-service.service';
import { GuardServiceService } from './services/guard-service.service';
import { UserServiceService } from './services/user-service.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './pages/profil/profil.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ListEmployeeComponent } from './pages/employee/list-employee/list-employee.component';
import { ListAvanceComponent } from './pages/avances/list-avance/list-avance.component';
import { AddAvanceComponent } from './pages/avances/add-avance/add-avance.component';
import { UpdateAvanceComponent } from './pages/avances/update-avance/update-avance.component';
import { AddCongeComponent } from './pages/conge/add-conge/add-conge.component';
import { ListCongeComponent } from './pages/conge/list-conge/list-conge.component';
import { UpdateCongeComponent } from './pages/conge/update-conge/update-conge.component';
import { AddPrimeComponent } from './pages/prime/add-prime/add-prime.component';
import { ListPrimeComponent } from './pages/prime/list-prime/list-prime.component';
import { UpdatePrimeComponent } from './pages/prime/update-prime/update-prime.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfilComponent,
    HomeComponent,
    NavbarComponent,
    ListEmployeeComponent,
    ListAvanceComponent,
    AddAvanceComponent,
    UpdateAvanceComponent,
    AddCongeComponent,
    ListCongeComponent,
    UpdateCongeComponent,
    AddPrimeComponent,
    ListPrimeComponent,
    UpdatePrimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    CommonModule
    
  ],
  providers: [
    AuthServiceService,
    GuardServiceService,
    UserServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
