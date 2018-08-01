import {EmployeeAC} from '../Model/employee-model';
import * as EmployeeRepository from '../Repository/employee.repository';

export let GetAllEmployee=(res:any)=>{
    EmployeeRepository.GetAllEmployee().then(employee=>{
        let employeeList = new Array<any>();
        for(var i=0;i < employee.length; i++){
            employeeList.push(employee[i].dataValues);
        }
        res.send(employeeList);
    });
}

export let GetEmployeeById=(res:any,id:number)=>{
    EmployeeRepository.GetEmployeeById(id).then(employee=>{
        res.send(employee.dataValues);
    });
}

export let AddEmployee=(res:any ,employee:EmployeeAC)=>{
       let employeeData = {
        firstname: employee.firstname,
        lastname :employee.lastname,
        email : employee.email
       }
       EmployeeRepository.AddEmployee(employeeData).then(employeeResponse=>{
        res.send();
       });
    
}

export let UpdateEmployee = (res: any, employee: EmployeeAC) => {
     let employeeData = {
        firstname: employee.firstname,
        lastname :employee.lastname,
        email : employee.email
       }
    EmployeeRepository.UpdateEmployee(employeeData,{id:employee.id}).then(employeeResponse=>{
        res.send();
       });
}