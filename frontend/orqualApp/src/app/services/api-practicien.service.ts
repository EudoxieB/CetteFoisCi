import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPracticienService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:3000/practiciens';

  //get all Practiciens
  getAllPracticiens(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  //get all Practicien by Id
  getPracticienById(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
