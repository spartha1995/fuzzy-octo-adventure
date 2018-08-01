import {Employee} from '../Model/employee-model';
import * as DataRepository from './data.repository';

export let GetAllEmployee =() =>{
    return DataRepository.GetAll(Employee);
}

export let GetEmployeeById = (id:number) =>{
    return DataRepository.GetById(Employee,id);
}

export let AddEmployee = (data:any) =>{
    return DataRepository.AddData(Employee,data);
}

export let UpdateEmployee = (data:any,query:any) =>{
    return DataRepository.UpdateData(Employee,data,query);
}