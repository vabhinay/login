import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { LoginComponent } from './core/login/login.component';
import { UserComponent } from './container/user/user.component';
import { EmployeeComponent } from './container/employee/employee.component';
import { EmployeeListComponent } from './container/employee/employee-list/employee-list.component';
 const appRoutes: Routes = [
   {
     path: 'login',
     component: LoginComponent
   },
   {
     path: 'user',
     component: UserComponent
   },
   {
     path: 'employee',
     loadChildren: 'src/app/container/employee/employee.module#EmployeeModule'
   },
   {
     path: '',
     pathMatch: 'full',
     redirectTo: '/login'
   },
   {
     path: '**',
     component: LoginComponent
   },
 ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    UserComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
