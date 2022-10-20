import { Component, OnInit } from '@angular/core';
import { EmpDataService } from '../../services/emp-data.service';
@Component({
  selector: 'app-mobilemain',
  templateUrl: './mobilemain.component.html',
  styleUrls: ['./mobilemain.component.css']
})
export class MobilemainComponent implements OnInit {

  constructor(private employeeService:EmpDataService) { }

  ngOnInit(): void {
    this.createAlphabetArray();
  }
  alphabets:string[]=[];
  public createAlphabetArray():void{
    for(let i=97;i<=122;i++){
      this.alphabets.push(String.fromCodePoint(i));
    }
  }

  searchByAlphabets(alphabet:any):void{
    let employees=this.employeeService.getEmployees();
    let searchedEmployees=employees.filter((employee:any)=>employee.preferredName.toLowerCase().startsWith(alphabet));
    this.employeeService.sendAlphabetEmployees(searchedEmployees);
  }
}
