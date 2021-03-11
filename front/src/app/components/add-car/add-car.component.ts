import {Component} from '@angular/core';
import {ICar} from '../../models';
import {CarsService} from '../../services';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  car: ICar;
  copiedCar: ICar;
  brand = new FormControl();
  model = new FormControl();
  price = new FormControl();
  license_plate = new FormControl();
  vin_code = new FormControl('VIN');
  producedDate = new FormControl();
  description = new FormControl();
  form = new FormGroup({
    brand: this.brand,
    model: this.model,
    price: this.price,
    license_plate: this.license_plate,
    vin_code: this.vin_code,
    producedDear: this.producedDate,
    description: this.description
  });

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private carsService: CarsService,
              private dataService: DataService) {
    this.copiedCar = dataService.get().getValue();
  }

  onSubmit(): void {
    if (!this.form.untouched) {
      this.carsService.add({...this.form.value}).subscribe(value => console.log(value));
    }
    this.router.navigate([this.activatedRoute.parent.routeConfig.path]);
  }

  paste(): void {
    this.brand.setValue(this.copiedCar.brand);
    this.model.setValue(this.copiedCar.model);
    this.price.setValue(this.copiedCar.price);
    this.producedDate.setValue(this.copiedCar.produced_date);
    this.description.setValue(this.copiedCar.description);
  }

}
