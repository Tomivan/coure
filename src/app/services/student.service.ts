import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from "../student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = "https://sampleapi.coure-tech.com/api/Students";

  constructor(private http:HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl)
  }
}
