import { Component, Input, AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpDataService } from '../../services/emp-data.service';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements AfterViewInit {
  @Input() employee: Employee;

  constructor(
    private modalService: NgbModal,
    private employeeService: EmpDataService
  ) {}

  ngAfterViewInit() {
    if (this.employee.picture == null) {
      this.employee.picture = '../../../assets/images/profile.png';
    }
  }

  openVerticallyCentered(content: any) {
    this.employeeService.employeeFormTitle = 'edit employee';
    this.modalService.open(content, { centered: true });
  }

  triggerEdit(): void {
    this.employeeService.sendEditData(this.employee);
  }

  delete() {
    this.employeeService.deleteItem(this.employee);
  }
}
