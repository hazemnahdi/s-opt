import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAvanceComponent } from './pages/avances/add-avance/add-avance.component';
import { ListAvanceComponent } from './pages/avances/list-avance/list-avance.component';
import { AddCongeComponent } from './pages/conge/add-conge/add-conge.component';
import { ListCongeComponent } from './pages/conge/list-conge/list-conge.component';
import { ListEmployeeComponent } from './pages/employee/list-employee/list-employee.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AddPrimeComponent } from './pages/prime/add-prime/add-prime.component';
import { ListPrimeComponent } from './pages/prime/list-prime/list-prime.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'profil',component:ProfilComponent},
  {path:'list-employees',component:ListEmployeeComponent},
  {path:'list-avances',component:ListAvanceComponent},
  {path:'list-conges',component:ListCongeComponent},
  {path:'list-primes',component:ListPrimeComponent},
  {path:'add-avance',component:AddAvanceComponent},
  {path:'add-conge',component:AddCongeComponent},
  {path:'add-prime',component:AddPrimeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
