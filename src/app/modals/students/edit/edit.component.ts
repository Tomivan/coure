import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  firstName: string;
  lastName: string;
  title: string;
  phoneNumber: string;
  email: string;
  address: string;
  dateOfBirth: string;

  constructor(public modalRef: MdbModalRef<EditComponent>) { }

  ngOnInit(): void {
  }
  editStudent() {
    console.log("edited!")
  }
}
