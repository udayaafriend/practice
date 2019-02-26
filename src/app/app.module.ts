import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { ReactformComponent } from './reactform/reactform.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GuestComponent } from './guest/guest.component';
import { TabledataComponent } from './tabledata/tabledata.component';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { CreateEmployeeComponent } from './employeeslist/create-employee.component';


const AppRoutes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'reactform', component: ReactformComponent },
  { path: 'templaetdrivenform', component: TemplatedrivenformComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'guest', component: GuestComponent },
  { path: 'tabledata', component: TabledataComponent },
  { path: 'employeeslist', component: EmployeeslistComponent },
  { path: 'create-employee', component: CreateEmployeeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ReactformComponent,
    TemplatedrivenformComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    SignupComponent,
    GuestComponent,
    TabledataComponent,
    EmployeeslistComponent,
    CreateEmployeeComponent,



  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    RouterModule,
    ReactiveFormsModule,
    FormsModule,


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
