import { Component, OnInit, Input } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-school-delete',
  templateUrl: './school-delete.component.html',
  styleUrls: ['./school-delete.component.scss']
})
export class SchoolDeleteComponent implements OnInit {
  student:Student;
  constructor(public modalRef: MdbModalRef<SchoolDeleteComponent>) { }

  ngOnInit(): void {
  }

  deleteStudent(student: any) {
    console.log(student)
  }

}
