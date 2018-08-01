import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  templateUrl: './employee-list.component.html',
  //styleUrls: ['./app.component.css']
})
export class EmployeeListComponent implements OnInit {
     employeeList = [];

     ngOnInit(): void {
        this.employeeList.push(new Employee(1, "John", "Doe", "John@abc.com"));
    }
}