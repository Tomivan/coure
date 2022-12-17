import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-school-edit',
  templateUrl: './school-edit.component.html',
  styleUrls: ['./school-edit.component.scss']
})
export class SchoolEditComponent implements OnInit {
  name: string;

  constructor(public modalRef: MdbModalRef<SchoolEditComponent>) { }

  ngOnInit(): void {
  }
  editSchool() {
    console.log("created!")
  }

}
