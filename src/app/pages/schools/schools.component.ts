import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/services/schools.service';
import { AddComponent } from 'src/app/modals/schools/add/add.component';
import { EditComponent } from 'src/app/modals/schools/edit/edit.component';
import { DeleteComponent } from 'src/app/modals/schools/delete/delete.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { School } from '../../schools';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})
export class SchoolsComponent implements OnInit {
  schools: School[] = [];
  modalRef: MdbModalRef<AddComponent> | null = null;

  constructor(private schoolService: SchoolService, private modalService: MdbModalService) { }

  ngOnInit(): void {
    this.schoolService.getStudents().subscribe((schools) => {
      this.schools = schools;
      console.log(this.schools);
    });
  }

  openModal() {
    this.modalRef = this.modalService.open(AddComponent)
  }
  openEditModal() {
    this.modalRef = this.modalService.open(EditComponent)
  }
  openDeleteModal() {
    this.modalRef = this.modalService.open(DeleteComponent)
  }
}
