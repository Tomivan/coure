import { Component, OnInit, Input } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  @Input() student:Student;
  constructor(public modalRef: MdbModalRef<DeleteComponent>) { }

  ngOnInit(): void {
  }

  deleteStudent(currentStudent: any) {
    console.log(currentStudent)
  }

}
