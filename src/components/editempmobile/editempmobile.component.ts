import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import { EmpDataService } from '../../app/services/emp-data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-editempmobile',
  templateUrl: './editempmobile.component.html',
  styleUrls: ['./editempmobile.component.css']
})
export class EditempmobileComponent implements OnInit {
  imageUrl:any;
  
  constructor(private employeeService:EmpDataService,private modalService: NgbModal) {}

  ngOnInit(): void {
    this.employeeService.editData.subscribe((employee:any)=>{
      this.getEmployeeData=employee;
      this.employeeData(this.getEmployeeData)
    })
    this.departmentValue=this.employeeForm.get('department').setValue('IT')
    this.jobTitleValue=this.employeeForm.get('jobTitle').setValue(this.jobTitlesList[0])
    this.employeeForm.get('office').setValue(this.officeList[0])
  }

  departmentValue:any;
  jobTitleValue:any;
  getEmployeeData:any={}
  officeList:any[]=["Seattle","India"]
  jobTitlesList:any[]=["Sharepoint Practice Head",".net development lead","recruiting expert","BI developer", "business analyst"]
  employeeFormTitle:any=this.employeeService.employeeFormTitle

  closeModal():void{
    this.modalService.dismissAll();
  }

  updateFilterCount():void{
    let filters=document.querySelectorAll('.filter-li')
    filters.forEach((filter:any)=>{
      filter.children[1].textContent=`(${this.employeeService.getCount(filter.children[0].textContent)})`
    })
  }

  employeeData(employee:any):void{
    this.employeeForm = new FormGroup({
      id:new FormControl(employee.id),
      preferredName: new FormControl(employee.preferredName,[Validators.required]),
      firstName: new FormControl(employee.firstName,[Validators.required]),
      lastName: new FormControl(employee.lastName,[Validators.required]),
      email: new FormControl(employee.email,[Validators.required,Validators.email]),
      phoneNumber: new FormControl(employee.phoneNumber,[Validators.required]),
      skypeId: new FormControl(employee.skypeId,[Validators.required]),
      jobTitle: new FormControl(employee.jobTitle|| this.jobTitleValue,[Validators.required]),
      department: new FormControl(employee.department,[Validators.required]),
      office: new FormControl(employee.office,[Validators.required]),
      picture:new FormControl(employee.picture),
      
    })
    this.imageUrl=employee.picture
  }

  employeeForm:any = new FormGroup({
    id: new FormControl(''),
    preferredName: new FormControl('',[Validators.required]),
    firstName: new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z0-9 ]+$')]),
    lastName: new FormControl(''),
    email: new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    phoneNumber: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
    skypeId: new FormControl('',[Validators.required,Validators.pattern('^[l]+[i]+[v]+[e]+[:]+[A-Za-z0-9]+$')]),
    jobTitle: new FormControl([Validators.required]),
    department: new FormControl([Validators.required]),
    office: new FormControl([Validators.required]),
    picture: new FormControl(''),
  })

  clearModal(){
    this.employeeForm.reset();
    this.imageUrl="../../assets/profile.png"
  }
  saveEmployee():void{
    
    if(!this.employeeForm.get('id').value){
      this.employeeService.addEmployee(this.employeeForm.value,this.imageUrl);
      this.modalService.dismissAll();
    }else{
      
      this.employeeService.setEmployee(this.employeeForm.value,this.imageUrl);
      this.modalService.dismissAll();
    }
    this.updateFilterCount()
  }

  get id(){
    return this.employeeForm.get('id')
  }
  get preferredName(){
    return this.employeeForm.get('preferredName');
  }
  get firstName(){ 
    return this.employeeForm.get('firstName');
  }
  get lastName(){
    return this.employeeForm.get('lastName');
  }
  get email(){
    return this.employeeForm.get('email');
  }
  get phoneNumber(){
    return this.employeeForm.get('phoneNumber');
  }
  get skypeId(){
    return this.employeeForm.get('skypeId');
  }
  get picture(){
    return this.employeeForm.get('picture')
  }
  get jobTitle(){
    return this.employeeForm.get('jobTitle');
  }
  get department(){
    return this.employeeForm.get('department');
  }
  get office(){
    return this.employeeForm.get('office');
  }

  setPrefName(firstName:any,lastName:any):void{
    this.employeeForm.get('preferredName').setValue(firstName+" "+lastName)
  }

  
  selectImage(e:any)
  {
    
    if(e.target.files)
    {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=(event:any)=>{
      console.log(event.target.result);
      this.imageUrl = event.target.result;
    }
    }

  }

}
