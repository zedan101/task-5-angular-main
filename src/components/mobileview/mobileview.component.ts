import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpDataService } from '../../app/services/emp-data.service';

@Component({
  selector: 'app-mobileview',
  templateUrl: './mobileview.component.html',
  styleUrls: ['./mobileview.component.css']
})
export class MobileviewComponent implements OnInit {
  showFilter  =false;
  constructor(private modalService: NgbModal,private employeeService:EmpDataService) {}

  ngOnInit(): void {
   
  }

  openVerticallyCentered(content: any){
    this.employeeService.employeeFormTitle="Add Employee"
    this.modalService.open(content, { centered: true });  
  }


  showEmployees():void{
    this.employeeService.sendAllEmployees(this.employeeService.getEmployees())
  }

  showfilter()
  {
    this.showFilter = !this.showFilter;
  }

  searchInput:string;
  searchFilterInput:string="preferredName";

  search():void{
    let employees=this.employeeService.getEmployees()
    const re = new RegExp(this.searchInput, 'gi');
    let searchedEmployees = employees.filter((emp: any) => emp[this.searchFilterInput].match(re));
    this.employeeService.sendSearchEmployees(searchedEmployees)
  }

}
