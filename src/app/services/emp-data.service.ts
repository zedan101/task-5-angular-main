import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {
  public employees;
  filteredEmployees=new Subject()
  showAllEmployees=new Subject();
  searchEmployees=new Subject();
  AlphabetEmployees=new Subject();
  editData=new Subject();
  employeeFormTitle=''



  constructor() {}
  



  pushEmployees(employees:Employee[]):void { 
   
    if(employees!=null){
    window.localStorage.setItem("employees", JSON.stringify(employees));
  }
  }
 



  getEmployees(){
    return JSON.parse(window.localStorage.getItem("employees") || "[]");
  }


  
  addEmployee(e:Employee,img:string):void {
    let employees=this.getEmployees();
    e.picture=img;
    let employee=new Employee(e.id,e.firstName,e.lastName,e.preferredName,e.email,e.jobTitle,e.department,e.office,e.phoneNumber,e.skypeId,e.picture);
    employees.push(employee);
    this.pushEmployees(employees);
    this.sendAllEmployees(employees);
  }


 
  sendFilteredEmployees(employees:Employee){
    this.filteredEmployees.next(employees);
  }

  

  sendAllEmployees(employees:Employee){
    this.showAllEmployees.next(employees);
  }

  

  sendSearchEmployees(employees:Employee){ 
    this.searchEmployees.next(employees);
  }
    


  
  sendAlphabetEmployees(employees:Employee){
    this.AlphabetEmployees.next(employees);
  }

  

  sendEditData(employee:Employee){
    this.editData.next(employee);
  }  




  deleteItem(employee:Employee){
    console.log(employee);
    let employees=this.getEmployees();
    console.log(employees);
    let index=employees.findIndex((e:any)=>e.id==employee.id)
    if (index !== -1) {
      employees.splice(index, 1);
    }
    console.log(employees);
    window.localStorage.setItem("employees", JSON.stringify(employees));
    this.sendAllEmployees(employees)
  }




  setEmployee(employee:Employee,img:string){
    let employees=this.getEmployees();
    let index=employees.findIndex((e:Employee)=>e.id==employee.id);
    employees[index]=employee;
    employees[index].picture=img;
    this.pushEmployees(employees);
    this.sendAllEmployees(employees);
  }

  

  
  getCount(filter:any):number{
    let employees:Employee[] = this.getEmployees()
    let res=0;
    employees.forEach((emp:Employee)=>{
      if(emp.department==filter || emp.office.toLowerCase()==filter.toLowerCase() || emp['jobTitle'].toLowerCase()==filter.toLowerCase()){
        res++;
      }
    })
    return res;
  }
}



