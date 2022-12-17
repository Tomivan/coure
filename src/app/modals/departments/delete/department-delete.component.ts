import { Component, OnInit, Input } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-department-delete',
  templateUrl: './department-delete.component.html',
  styleUrls: ['./department-delete.component.scss']
})
export class DepartmentDeleteComponent implements OnInit {
  student:Student;
  constructor(public modalRef: MdbModalRef<DepartmentDeleteComponent>) { }

  ngOnInit(): void {
  }

  deleteStudent(student: any) {
    console.log(student)
  }

}
