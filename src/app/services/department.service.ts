import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from "../departments";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = "https://sampleapi.coure-tech.com/api/Departments";

  constructor(private http:HttpClient) { }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl)
  }
  deleteDepartments(department: Department): Observable<Department> { 
    const url = `${this.apiUrl}/${department.id}`
    return this.http.delete<Department>(url)
  }
  editDepartments(department: Department): Observable<Department> {
    const url = `${this.apiUrl}/${department.id}`
    return this.http.put<Department>(url, department, httpOptions)
  }
}