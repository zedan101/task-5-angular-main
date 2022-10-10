import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpDataService } from '../../app/services/emp-data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent{
  constructor(private modalService: NgbModal,private employeeService:EmpDataService) { }

  @Input() employee:any;

  openVerticallyCentered(content: any) {
  this.employeeService.employeeFormTitle="edit employee"
  this.modalService.open(content, { centered: true });
  }

  triggerEdit():void{
    this.employeeService.sendEditData(this.employee)           
  }
}
