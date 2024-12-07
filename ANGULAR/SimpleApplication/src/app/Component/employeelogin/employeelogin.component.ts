import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employeelogin',
  imports: [CommonModule,FormsModule],
  templateUrl: './employeelogin.component.html',
  styleUrl: './employeelogin.component.css'
})
export class EmployeeloginComponent {
  employeeId:string="";
  employeePassword: string="";
  consoleData(event:Event):void{
    event.preventDefault();
    console.log(this.employeeId);
    console.log(this.employeePassword);
  }
}
