import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-school-add',
  templateUrl: './school-add.component.html',
  styleUrls: ['./school-add.component.scss']
})
export class SchoolAddComponent implements OnInit {
  name: string;

  constructor(public modalRef: MdbModalRef<SchoolAddComponent>) { }

  ngOnInit(): void {
  }
  addSchool() {
    console.log("created")
  }

}
