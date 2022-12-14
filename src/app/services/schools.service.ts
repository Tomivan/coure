import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { School } from "../schools";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private apiUrl = "https://sampleapi.coure-tech.com/api/Schools";

  constructor(private http:HttpClient) { }

  getStudents(): Observable<School[]> {
    return this.http.get<School[]>(this.apiUrl)
  }
}