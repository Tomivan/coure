import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { School } from "../schools";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private apiUrl = "https://sampleapi.coure-tech.com/api/Schools";

  constructor(private http:HttpClient) { }

  getSchools(): Observable<School[]> {
    return this.http.get<School[]>(this.apiUrl)
  }
  deleteSchools(school: School): Observable<School> { 
    const url = `${this.apiUrl}/${school.id}`
    return this.http.delete<School>(url)
  }
  editSchools(school: School): Observable<School> {
    const url = `${this.apiUrl}/${school.id}`
    return this.http.put<School>(url, school, httpOptions)
  }
}