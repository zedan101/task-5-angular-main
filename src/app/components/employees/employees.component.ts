import { HostListener,Component, OnInit } from '@angular/core';
import {EmpDataService} from '../../services/emp-data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  scrWidth:any;
  scrCheck:boolean;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrWidth = window.innerWidth;
  }
  constructor(private employeeService:EmpDataService) {
    this.getScreenSize();
    if(this.scrWidth<=480){
      this.scrCheck=true;
    }
  }
  ngOnInit(): void {
    this.employees = JSON.parse(window.localStorage.getItem("employees") || "[]");

    this.employeeService.filteredEmployees.subscribe((employees:any)=>{
      this.employees=employees;
    })

    this.employeeService.showAllEmployees.subscribe((employees:any)=>{
      this.employees=employees;
    })

    this.employeeService.AlphabetEmployees.subscribe((employees:any)=>{
      this.employees=employees;
    })

    this.employeeService.searchEmployees.subscribe((employees:any)=>{
      this.employees=employees;
    })
  }
  employees:any = [];
}
