import { Injectable, signal } from '@angular/core';
import { ICar, ICarsResponse } from '../../types';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars = signal<ICar[]>([]);
  car = signal<ICar | null>(null);

  constructor(private readonly apollo: Apollo) {
    this.loadCars();
  }

  private loadCars() {
    this.apollo.watchQuery<ICarsResponse>({
      query: gql`
        query getCars {
          getAllCars {
            id
            name
            price
          }
        }
      `,
    }).valueChanges.subscribe(result => {
      this.cars.set(result.data.getAllCars);
    });
  }

  getCar(carId: number) {
    this.apollo.watchQuery<{ getCar: ICar }>({
      query: gql`
        query getCar($carId: Int!) {
          getCar(carId: $carId) {
            id
            name
            price
          }
        }
      `,
      variables: {
        carId,
      }
    }).valueChanges.subscribe(result => {
      this.car.set(result.data.getCar);
    });
  }

  getCarsSignal() {
    return this.cars;
  }

  getCarSignal() {
    return this.car;
  }
}
