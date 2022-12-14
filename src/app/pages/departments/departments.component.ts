import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/departments';
import { DepartmentService } from '../../services/department.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AddComponent } from 'src/app/modals/departments/add/add.component';
import { EditComponent } from 'src/app/modals/students/edit/edit.component';
import { DeleteComponent } from 'src/app/modals/departments/delete/delete.component';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  departments: Department[] = [];
  modalRef: MdbModalRef<AddComponent> | null = null;
  constructor(private departmentService: DepartmentService, private modalService: MdbModalService) { }

  ngOnInit(): void {
    this.departmentService.getStudents().subscribe((departments) => {
      this.departments = departments;
      console.log(this.departments);
    });
  }

  openModal() {
    this.modalRef = this.modalService.open(AddComponent)
  }
  openEditModal() {
    this.modalRef = this.modalService.open(EditComponent)
  }
  openDeleteModal() {
    this.modalRef = this.modalService.open(DeleteComponent)
  }
}
