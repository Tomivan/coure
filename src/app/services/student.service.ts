import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from "../student";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = "https://sampleapi.coure-tech.com/api/Students";

  constructor(private http:HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl)
  }
  deleteStudents(student: Student): Observable<Student> { 
    const url = `${this.apiUrl}/${student.id}`
    return this.http.delete<Student>(url)
  }
  editStudents(student: Student): Observable<Student> {
    const url = `${this.apiUrl}/${student.id}`
    return this.http.put<Student>(url, student, httpOptions)
  }
}
