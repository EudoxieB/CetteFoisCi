import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiPatientService {

  constructor(private http: HttpClient) { }

  //get Api URL
  apiUrl = 'http://localhost:3000/patients';

  //get all Patients
  getAllPatients(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  // edit and update a patient
  updatePatient(data: any, id: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // delete a Patient
  deletePatient(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
