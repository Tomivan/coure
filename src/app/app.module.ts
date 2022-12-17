import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './pages/students/students.component';
import { SchoolsComponent } from './pages/schools/schools.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { ButtonComponent } from './components/button/button.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddComponent } from './modals/students/add/add.component';
import { DeleteComponent } from './modals/students/delete/delete.component';
import { EditComponent } from './modals/students/edit/edit.component';
import { SchoolAddComponent } from './modals/schools/add/school-add.component';
import { SchoolDeleteComponent } from './modals/schools/delete/school-delete.component';
import { SchoolEditComponent } from './modals/schools/edit/school-edit.component';
import { DepartmentAddComponent } from './modals/departments/add/department-add.component';
import { DepartmentEditComponent } from './modals/departments/edit/department-edit.component';
import { DepartmentDeleteComponent } from './modals/departments/delete/department-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SchoolsComponent,
    DepartmentsComponent,
    ButtonComponent,
    AddComponent,
    DeleteComponent,
    EditComponent,
    SchoolAddComponent,
    SchoolDeleteComponent,
    SchoolEditComponent,
    DepartmentAddComponent,
    DepartmentEditComponent,
    DepartmentDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
