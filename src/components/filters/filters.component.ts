import { Component, OnInit, Input } from '@angular/core';
import { EmpDataService } from '../../app/services/emp-data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  constructor(private employeeService: EmpDataService) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    

    let filters=document.querySelectorAll('.filter-li')
    filters.forEach((filter:any)=>{
      filter.children[1].textContent=`(${this.employeeService.getCount(filter.children[0].textContent)})`
    })
  }

  @Input() filter:any
  @Input() title:any

  getFilteredEmployees(e:any):void{
    let filter=e.target.innerText
    let filteredEmployees:any=[]
    let employees=this.employeeService.getEmployees()
    employees.forEach((employee:any) => {
      if(employee.department.toLowerCase()==filter.toLowerCase() || employee.office.toLowerCase()==filter.toLowerCase() || employee.jobTitle.toLowerCase()==filter.toLowerCase()){
        filteredEmployees.push(employee)
      }
    });
    this.employeeService.sendFilteredEmployees(filteredEmployees)
  }
  

}

