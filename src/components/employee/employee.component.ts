import { Component, Input,AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpDataService } from '../../app/services/emp-data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements AfterViewInit {
  constructor(private modalService: NgbModal,private employeeService:EmpDataService) { }

  @Input() employee:any;
  ngAfterViewInit(){
    if(this.employee.picture==null){
      this.employee.picture="../../assets/profile.png";
    }
  }
  openVerticallyCentered(content: any) {
    if(this.employee.picture==null){
      this.employee.picture="../../assets/profile.png";
    }
    this.employeeService.employeeFormTitle="edit employee"
  this.modalService.open(content, { centered: true });
  }

  triggerEdit():void{
    this.employeeService.sendEditData(this.employee)           
  }
}
