import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from "../departments";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = "https://sampleapi.coure-tech.com/api/Departments";

  constructor(private http:HttpClient) { }

  getStudents(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl)
  }
}