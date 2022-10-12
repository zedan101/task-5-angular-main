import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '../components/header/header.component';
import { FiltersComponent } from '../components/filters/filters.component';
import { SearchComponent } from '../components/search/search.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { EmployeesComponent } from '../components/employees/employees.component';
import { EmployeeComponent } from '../components/employee/employee.component';
import { PopUpComponent } from '../components/popup/popup.component'
import { EmpDataService } from './services/emp-data.service';
import { FiltersPipe } from './pipes/filters.pipe';
import { MobileviewComponent } from '../components/mobileview/mobileview.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { MobilemainComponent } from '../components/mobilemain/mobilemain.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    SearchComponent,
    EmployeesComponent,
    EmployeeComponent,
    PopUpComponent,
    FiltersPipe,
    MobileviewComponent,
    SidebarComponent,
    MobilemainComponent
    ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [EmpDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
