import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Users } from '../models/user-model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _httpCliente:HttpClient) { }

  private pathBase:string='http://jsonplaceholder.typicode.com';

  getUsers():Observable<Users[]>{
    const url =`${this.pathBase}/users`;
    return this._httpCliente.get<Users[]>(url)
  }
}
