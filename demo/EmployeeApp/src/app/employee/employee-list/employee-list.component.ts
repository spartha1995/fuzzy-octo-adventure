import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import {HttpService} from '../../http.service';

@Component({
  templateUrl: './employee-list.component.html',
  //styleUrls: ['./app.component.css']
})
export class EmployeeListComponent implements OnInit {
     employeeList:any;

     constructor(private httpservice:HttpService){
       this.employeeList=new Array<Employee>();
     }
     ngOnInit(): void {
       this.fetchAllEmployee();
    }

    fetchAllEmployee()
    {
      debugger;
      this.httpservice.getAllEmployee().subscribe(res=>{
        debugger;
        this.employeeList = res;
        console.log(res);
      })
    }
}