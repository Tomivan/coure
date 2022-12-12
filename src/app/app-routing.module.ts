import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { SchoolsComponent } from './pages/schools/schools.component';
import { StudentsComponent } from './pages/students/students.component';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'schools', component: SchoolsComponent},
  { path: 'departments', component: DepartmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
