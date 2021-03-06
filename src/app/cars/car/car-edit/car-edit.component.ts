import { Component, OnInit } from '@angular/core';
import { Car } from '../../car.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  car: Car;
  spin = true;


  constructor(private route: ActivatedRoute, private router: Router, private carsService: CarsService) { }

  ngOnInit() {
    const carID = this.route.snapshot.params.id;
    this.carsService.getCarByID(carID).subscribe(car => {
      // console.log(car);
      this.car = car;
      this.spin = false;

    });
  }


  updateCarData() {
    this.spin = true;

    console.log(this.car);

    const editedCar: Car = {
      model: this.car.model,
      description: this.car.description,
      color: this.car.color,
      isDisabled: this.car.isDisabled
    };

    this.carsService.updateCarByID(this.car._id, editedCar).subscribe(data => {
      console.log(data);
      this.spin = false;

      this.router.navigate(['../'], { relativeTo: this.route });
    }
    );

  }



}
