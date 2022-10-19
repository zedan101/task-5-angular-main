import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {

  constructor() {}
  public employees;
  
  pushEmployees(employees:object):void { 
   
    if(employees!=null){
    window.localStorage.setItem("employees", JSON.stringify(employees));
  }
  }
 

  getEmployees():any {
    return JSON.parse(window.localStorage.getItem("employees") || "[]");
  }
  
  addEmployee(e:any,img:any):void {
    let employees=this.getEmployees();
    e.picture=img;
    let employee=new Employee(e.id,e.firstName,e.lastName,e.preferredName,e.email,e.jobTitle,e.department,e.office,e.phoneNumber,e.skypeId,e.picture);
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
  deleteItem(employee:any){
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
  setEmployee(employee:any,img:any){
    let employees=this.getEmployees();
    let index=employees.findIndex((e:any)=>e.id==employee.id);
    employees[index]=employee;
    employee[index].picture=img;
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
  picture:string;
 

  constructor(id:number,firstname:string,lastname:string,preferredname:string,email:string,jobtitle:string,department:string,office:string,phonenumber:string,skypeid:string,picture:string) {
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
    this.picture = picture;
  }
  
}
