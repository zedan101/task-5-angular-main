import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpDataService } from '../../services/emp-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  alphabets: string[] = [];
  searchInput: string;
  searchFilterInput: string = 'preferredName';

  constructor(
    private modalService: NgbModal,
    private employeeService: EmpDataService
  ) {}

  ngOnInit(): void {
    this.createAlphabetArray();
  }

  openVerticallyCentered(content: any) {
    this.employeeService.employeeFormTitle = 'Add Employee';
    this.modalService.open(content, { centered: true });
  }

  public createAlphabetArray(): void {
    for (let i = 97; i <= 122; i++) {
      this.alphabets.push(String.fromCodePoint(i));
    }
  }

  showEmployees(): void {
    this.employeeService.sendAllEmployees(this.employeeService.getEmployees());
  }

  searchByAlphabets(alphabet: string): void {
    let employees = this.employeeService.getEmployees();
    let searchedEmployees = employees.filter((employee: any) =>
      employee.preferredName.toLowerCase().startsWith(alphabet)
    );
    this.employeeService.sendAlphabetEmployees(searchedEmployees);
  }

  search(): void {
    let employees = this.employeeService.getEmployees();
    const re = new RegExp(this.searchInput, 'gi');
    let searchedEmployees = employees.filter((emp: any) =>
      emp[this.searchFilterInput].match(re)
    );
    this.employeeService.sendSearchEmployees(searchedEmployees);
  }
}
