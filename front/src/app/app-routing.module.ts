import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsComponent} from './components/cars/cars.component';
import {EditCarComponent} from './components/edit-car/edit-car.component';
import {AddCarComponent} from './components/add-car/add-car.component';

const routes: Routes = [
  {
    path: 'cars', component: CarsComponent, children: [
      {path: ':id/edit', component: EditCarComponent},
      {path: 'add', component: AddCarComponent}
    ]
  },
  {path: '', redirectTo: 'cars', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
