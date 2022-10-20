import { Component, Input,AfterViewInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpDataService } from '../../services/emp-data.service';

@Component({
  selector: 'app-editdatamob',
  templateUrl: './editdatamob.component.html',
  styleUrls: ['./editdatamob.component.css']
})
export class EditdatamobComponent implements AfterViewInit {

  
  constructor(private modalService: NgbModal,private employeeService:EmpDataService) { }

  @Input() employee:any;
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
