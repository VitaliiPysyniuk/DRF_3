import {Component, Input, OnInit} from '@angular/core';
import {ICar} from '../../models';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input() car: ICar;
  showDetails = false;

  constructor() {
  }

  onClick(): void {
    this.showDetails = !this.showDetails;
  }

}
