import { Component } from '@angular/core';
import { EmployeeloginComponent } from '../employeelogin/employeelogin.component';
import { AdminloginComponent } from "../adminlogin/adminlogin.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logincontainer',
  imports: [EmployeeloginComponent, AdminloginComponent, CommonModule],
  templateUrl: './logincontainer.component.html',
  styleUrl: './logincontainer.component.css'
})
export class LogincontainerComponent {
   isAdmin: boolean=true;
   changeTab(a: boolean){
    this.isAdmin=a;
   }
}
