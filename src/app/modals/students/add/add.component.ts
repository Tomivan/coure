import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  firstName: string;
  lastName: string;
  title: string;
  phoneNumber: string;
  email: string;
  address: string;
  dateOfBirth: string;

  constructor(public modalRef: MdbModalRef<AddComponent>) {}

  ngOnInit(): void {
  }
  addStudent() {
    console.log("created!")
  }
}
