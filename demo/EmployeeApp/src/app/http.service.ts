import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Employee} from './employee/employee.model';

@Injectable()
export class HttpService {

    constructor(private http:HttpClient){}

    getAllEmployee(){
        return this.http.get('/api/Fetchemployee');
    }

    addEmployee(employee:Employee)
    {
        return this.http.post('/api/employee',employee);
    }
}