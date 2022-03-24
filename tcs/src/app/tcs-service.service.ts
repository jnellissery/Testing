import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const localurl='http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class TcsServiceService {
  constructor(private http:HttpClient) { }
  get Employees():Observable<any>{
    let url=localurl+'/employees';
    return this.http.get(url)
  }
}
