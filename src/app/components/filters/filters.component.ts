import { Component, OnInit, Input } from '@angular/core';
import { EmpDataService } from '../../services/emp-data.service';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  @Input() filter: string | string[];
  @Input() title: string | string[];
  viewMoreBtn = 'view more';
  viewMoreCheck = false;

  constructor(private employeeService: EmpDataService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.toggleJobTitles(document.querySelectorAll('.filter-ul')[2]);

    let filters = document.querySelectorAll('.filter-li');
    filters.forEach((filter: any) => {
      filter.children[1].textContent = `(${this.employeeService.getCount(
        filter.children[0].textContent
      )})`;
    });
  }

  getFilteredEmployees(e: any): void {
    let filter = e.target.innerText;
    let filteredEmployees: any = [];
    let employees = this.employeeService.getEmployees();
    employees.forEach((employee: any) => {
      if (
        employee.department.toLowerCase() == filter.toLowerCase() ||
        employee.office.toLowerCase() == filter.toLowerCase() ||
        employee.jobTitle.toLowerCase() == filter.toLowerCase()
      ) {
        filteredEmployees.push(employee);
      }
    });
    this.employeeService.sendFilteredEmployees(filteredEmployees);
  }

  viewMoreToggler(): void {
    console.log(document.querySelectorAll('.filter-ul')[2]);
    this.toggleJobTitles(document.querySelectorAll('.filter-ul')[2]);
    this.viewMoreCheck = !this.viewMoreCheck;
    if (this.viewMoreCheck) {
      this.viewMoreBtn = 'view less';
    } else {
      this.viewMoreBtn = 'view more';
    }
  }

  toggleJobTitles(jobTitlesUl: any): void {
    jobTitlesUl.classList.add('mb-0');
    for (let i = 5; i < jobTitlesUl.children.length; i++) {
      jobTitlesUl.children[i].classList.toggle('d-none');
    }
  }
}
