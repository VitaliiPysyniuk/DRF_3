import {Component, Input} from '@angular/core';
import {ICar} from '../../models';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from "../../services/data.service";
import {CarsService} from "../../services";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent {
  @Input() car: ICar;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private dataService: DataService, private carsService: CarsService) {
  }

  edit(): void {
    this.router.navigate([this.car.id, 'edit'], {
      relativeTo: this.activatedRoute, state: this.car
    });
  }

  copy(): void {
    this.dataService.set(this.car);
  }

  delete(): void {
    this.carsService.delete(this.car.id);
  }

}
