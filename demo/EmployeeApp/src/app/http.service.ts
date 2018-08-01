import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

    constructor(private http:HttpClient){}

    getAllEmployee(){
        return this.http.get('/api/Fetchemployee');
    }
}