import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<AddComponent>) {}

  ngOnInit(): void {
  }
  addStudent() {
    console.log("created!")
  }
}
