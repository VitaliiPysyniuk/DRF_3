import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICar} from '../models';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  filedToChange: object = {};

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>('http://127.0.0.1:8000/cars/');
  }

  add(car: ICar): Observable<ICar> {
    return this.httpClient.post<ICar>('http://localhost:8000/cars/', car, {
      headers: { "Content-Type": "application/json" }});
  }

  getById(id: number): Observable<ICar> {
    return this.httpClient.get<ICar>('http://localhost:8000/cars/', {params: {id: `${id}`}});
  }

  getByParams(params): Observable<ICar> {
    return this.httpClient.get<ICar>('http://localhost:8000/cars/', {params});
  }

  edit(car: ICar): Observable<ICar> {
    return this.httpClient.put<ICar>(`http://localhost:8000/cars/${car.id}/`, JSON.stringify(car), {
      headers: { "Content-Type": "application/json" }});
  }

  delete(id: number): Observable<ICar> {
    return this.httpClient.delete<ICar>(`http://localhost:8000/cars/${id}/`);
  }
}
