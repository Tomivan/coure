import { Component, OnInit } from '@angular/core';
import { StudentService } from "../../services/student.service";
import { Student } from '../../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
      console.log(this.students);
    });
  }

  addNew() {
    console.log("created!")
  }
}
