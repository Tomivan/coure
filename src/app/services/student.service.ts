import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Student } from "../student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = "https://sampleapi.coure-tech.com/swagger/v1/swagger.json"

  constructor(private http:HttpClient) { }

  getStudents(): Observable<Student[]> {
    console.log(Response)
    return this.http.get<Student[]>(this.apiUrl)
  }
}
