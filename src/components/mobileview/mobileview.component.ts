import { Component, OnInit } from '@angular/core';
import * as Filters from '../../assets/static files/data';

@Component({
  selector: 'app-mobileview',
  templateUrl: './mobileview.component.html',
  styleUrls: ['./mobileview.component.css']
})
export class MobileviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  filters=Filters.filters;
}
