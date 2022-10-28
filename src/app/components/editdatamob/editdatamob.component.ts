import { Component, Input,AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpDataService } from '../../services/emp-data.service';
import {Employee} from '../../model/employee.model';



@Component({
  selector: 'app-editdatamob',
  templateUrl: './editdatamob.component.html',
  styleUrls: ['./editdatamob.component.css']
})


export class EditdatamobComponent implements AfterViewInit {

  @Input() employee:Employee;
  
  constructor(private modalService: NgbModal,private employeeService:EmpDataService) { }



  ngAfterViewInit(){
    if(this.employee.picture==null){
      this.employee.picture="../../assets/profile.png";
    }
  }



  openVerticallyCentered(content: any) {
    this.employeeService.employeeFormTitle="edit employee";
  this.modalService.open(content, {windowClass : 'mob-editform-width' });
  }




  triggerEdit():void{
    this.employeeService.sendEditData(this.employee);           
  }



  delete(){
    this.employeeService.deleteItem(this.employee);
  }
}
