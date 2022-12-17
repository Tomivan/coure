import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/departments';
import { DepartmentService } from '../../services/department.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { DepartmentAddComponent } from 'src/app/modals/departments/add/department-add.component';
import { DepartmentEditComponent } from 'src/app/modals/departments/edit/department-edit.component';
import { DepartmentDeleteComponent } from 'src/app/modals/departments/delete/department-delete.component';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  departments: Department[] = [];
  modalRef: MdbModalRef<DepartmentAddComponent> | null = null;
  constructor(private departmentService: DepartmentService, private modalService: MdbModalService) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe((departments) => {
      this.departments = departments;
    });
  }

  openModal() {
    this.modalRef = this.modalService.open(DepartmentAddComponent)
  }
  openEditModal() {
    this.modalRef = this.modalService.open(DepartmentEditComponent)
  }
  openDeleteModal() {
    this.modalRef = this.modalService.open(DepartmentDeleteComponent)
  }
}
