import { Component, OnInit } from '@angular/core';
import { StudentService } from "../../services/student.service";
import { MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import { AddComponent } from "../../modals/students/add/add.component";
import { EditComponent } from 'src/app/modals/students/edit/edit.component';
import { DeleteComponent } from 'src/app/modals/students/delete/delete.component';
import { Student } from '../../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  currentStudent: Student;
  modalRef: MdbModalRef<AddComponent> | null = null;
  constructor(private studentService: StudentService, private modalService: MdbModalService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
      console.log(this.students);
    });
  }
  openModal() {
    this.modalRef = this.modalService.open(AddComponent)
  }
  openEditModal() {
    this.modalRef = this.modalService.open(EditComponent)
  }
  openDeleteModal(currentStudent: any) {
    this.modalRef = this.modalService.open(DeleteComponent)
  }
}
