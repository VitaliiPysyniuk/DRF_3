import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ICar} from '../../models';
import {FormControl, FormGroup} from '@angular/forms';
import {CarsService} from "../../services";

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent{
  car: ICar;
  editedCar: ICar;
  form: FormGroup;
  brand: FormControl;
  model: FormControl;
  price: FormControl;
  license_plate: FormControl;
  vin_code: FormControl;
  producedDate: FormControl;
  description: FormControl;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private carsService: CarsService) {
    activatedRoute.params.subscribe(value => {
      this.car = router.getCurrentNavigation().extras.state as ICar;

      this.brand = new FormControl(this.car.brand);
      this.model = new FormControl(this.car.model);
      this.price = new FormControl(this.car.price);
      this.license_plate = new FormControl(this.car.license_plate);
      this.vin_code = new FormControl(this.car.vin_code);
      this.producedDate = new FormControl(this.car.produced_date);
      this.description = new FormControl(this.car.description);

      this.form = new FormGroup({
        brand: this.brand,
        model: this.model,
        price: this.price,
        license_plate: this.license_plate,
        vin_code: this.vin_code,
        producedDear: this.producedDate,
        description: this.description
      });
    });
  }

  onSubmit(): void {
    if (!this.form.untouched) {
      this.editedCar = {
        id: this.car.id,
        ...this.form.value
      };
      this.carsService.edit(this.editedCar).subscribe(value => console.log(value));
    }
    this.router.navigate([this.activatedRoute.parent.routeConfig.path]);
  }
}
