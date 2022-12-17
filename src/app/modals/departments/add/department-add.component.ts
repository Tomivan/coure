import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.scss']
})
export class DepartmentAddComponent implements OnInit {
  name: string;

  constructor(public modalRef: MdbModalRef<DepartmentAddComponent>) { }

  ngOnInit(): void {
  }
  addDepartment() {
    console.log("created")
  }

}
