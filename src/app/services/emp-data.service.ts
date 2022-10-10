import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {

  constructor() {this.pushEmployees(this.employees); }
  public employees;
  
  pushEmployees(employees:object):void { 
    if(employees!=null){
    window.localStorage.setItem("employees", JSON.stringify(employees));
  }
  }

  getEmployees():any {
    return JSON.parse(window.localStorage.getItem("employees") || "[]");
  }
  
  addEmployee(e:any):void {
    let employees=this.getEmployees();
    let employee=new Employee(e.id,e.firstName,e.lastName,e.preferredName,e.email,e.jobTitle,e.department,e.office,e.phoneNumber,e.skypeId);
    employees.push(employee);
    this.pushEmployees(employees);
    this.sendAllEmployees(employees);
  }

  filteredEmployees=new Subject()
  sendFilteredEmployees(employees:any){
    this.filteredEmployees.next(employees);
  }

  showAllEmployees=new Subject();
  sendAllEmployees(employees:any){
    this.showAllEmployees.next(employees);
  }

  searchEmployees=new Subject();
  sendSearchEmployees(employees:any){ 
    this.searchEmployees.next(employees);
  }
    
  AlphabetEmployees=new Subject();
  sendAlphabetEmployees(employees:any){
    this.AlphabetEmployees.next(employees);
  }

  editData=new Subject();
  sendEditData(employee:any){
    this.editData.next(employee);
  }  
  
  setEmployee(employee:any){
    let employees=this.getEmployees();
    let index=employees.findIndex((e:any)=>e.id==employee.id);
    employees[index]=employee;
    this.pushEmployees(employees);
    this.sendAllEmployees(employees);
  }

  employeeFormTitle=''
  
  getCount(filter:any):number{
    let employees:any = this.getEmployees()
    let res=0;
    employees.forEach((emp:any)=>{
      if(emp.department==filter || emp.office.toLowerCase()==filter.toLowerCase() || emp['jobTitle'].toLowerCase()==filter.toLowerCase()){
        res++;
      }
    })
    return res;
  }
}

class Employee{
  id:number;
  preferredName:string;
  firstName:string;
  lastName:string;
  email:string;
  phoneNumber:string;
  skypeId:string;
  jobTitle:string;
  department:string;
  office:string;
 

  constructor(id:number,firstname:string,lastname:string,preferredname:string,email:string,jobtitle:string,department:string,office:string,phonenumber:string,skypeid:string) {
    this.id=id|| JSON.parse(window.localStorage.getItem("employees") || "[]").length+1;
    this.preferredName = preferredname;
    this.firstName = firstname;
    this.lastName = lastname;
    this.email = email;
    this.phoneNumber = phonenumber;
    this.skypeId = skypeid;
    this.jobTitle = jobtitle;
    this.department = department;
    this.office = office;
    
  }
  
}
