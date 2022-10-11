import { Component, OnInit } from '@angular/core';
import * as Filters from '../../assets/static files/data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpDataService } from '../../app/services/emp-data.service';

@Component({
  selector: 'app-mobileview',
  templateUrl: './mobileview.component.html',
  styleUrls: ['./mobileview.component.css']
})
export class MobileviewComponent implements OnInit {

  constructor(private modalService: NgbModal,private employeeService:EmpDataService) {}

  ngOnInit(): void {
    this.createAlphabetArray();
  }

  openVerticallyCentered(content: any){
    this.employeeService.employeeFormTitle="Add Employee"
    this.modalService.open(content, { centered: true });  
  }

  alphabets:string[]=[]
  public createAlphabetArray():void{
    for(let i=97;i<=122;i++){
      this.alphabets.push(String.fromCodePoint(i))
    }
  }

  showEmployees():void{
    this.employeeService.sendAllEmployees(this.employeeService.getEmployees())
  }

  searchByAlphabets(alphabet:any):void{
    let employees=this.employeeService.getEmployees()
    let searchedEmployees=employees.filter((employee:any)=>employee.preferredName.toLowerCase().startsWith(alphabet))
    this.employeeService.sendAlphabetEmployees(searchedEmployees)
  }

  searchInput:string;
  searchFilterInput:string="preferredName";

  search():void{
    let employees=this.employeeService.getEmployees()
    const re = new RegExp(this.searchInput, 'gi');
    let searchedEmployees = employees.filter((emp: any) => emp[this.searchFilterInput].match(re));
    this.employeeService.sendSearchEmployees(searchedEmployees)
  }

  filters=Filters.filters;
}
