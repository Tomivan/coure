import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.scss']
})
export class DepartmentEditComponent implements OnInit {
  name: string;

  constructor(public modalRef: MdbModalRef<DepartmentEditComponent>) { }

  ngOnInit(): void {
  }
  editDepartment() {
    console.log("created!")
  }

}
