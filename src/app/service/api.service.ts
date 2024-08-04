import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private _HttpClient: HttpClient) { }
  imgPath:string="https://image.tmdb.org/t/p/w500"


  doGet<T>(url: string): Observable<T> {
    return this._HttpClient.get<T>(url);
  }
}
