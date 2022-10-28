import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpDataService } from '../../services/emp-data.service';

@Component({
  selector: 'app-mobileview',
  templateUrl: './mobileview.component.html',
  styleUrls: ['./mobileview.component.css']
})
export class MobileviewComponent implements OnInit {
  showFilter  =false;
  searchInput:string;
  searchFilterInput:string="preferredName";


  constructor(private modalService: NgbModal,private employeeService:EmpDataService) {}



  ngOnInit(): void {
   
  }



  openVerticallyCentered(content: any){
    this.employeeService.employeeFormTitle="Add Employee";
    this.modalService.open(content, {windowClass : 'mob-form-width' });  
  }



  showEmployees():void{
    this.employeeService.sendAllEmployees(this.employeeService.getEmployees());
  }



  showfilter()
  {
    this.showFilter = !this.showFilter;
  }


  search():void{
    let employees=this.employeeService.getEmployees()
    const re = new RegExp(this.searchInput, 'gi');
    let searchedEmployees = employees.filter((emp: any) => emp[this.searchFilterInput].match(re));
    this.employeeService.sendSearchEmployees(searchedEmployees);
  }

}
