import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ICar} from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private selectedCar = new BehaviorSubject<ICar>(null);

  constructor() {}

  get(): BehaviorSubject<ICar> {
    return this.selectedCar;
  }

  set(car: ICar): void {
    this.selectedCar.next(car);
  }
}
