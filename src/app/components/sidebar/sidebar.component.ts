import { Component, OnInit } from '@angular/core';
import * as Filters from '../../../assets/static-files/data';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  filters = Filters.filters;

  constructor() {}

  ngOnInit(): void {
    console.log(Filters.filters);
  }
}
