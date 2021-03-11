import { Component, OnInit } from '@angular/core';
import {ICar} from '../../models';
import {CarsService} from '../../services';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: ICar[];

  constructor(private carsService: CarsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.carsService.getAll().subscribe(response => this.cars = response);
  }

  onClick(): void {
    this.router.navigate(['cars']);
  }

  add(): void {
    this.router.navigate(['add'], {relativeTo: this.activatedRoute});
  }
}
