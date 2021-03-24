import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../person';
@Injectable({
  providedIn: 'root',
})
export class TableService {

  constructor(private http: HttpClient) {


  }


  getPersonas() {

   return this.http.get<Person[]>("https://jsonplaceholder.typicode.com/users")
  }




}
