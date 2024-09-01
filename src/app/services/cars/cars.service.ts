import { Injectable, signal } from '@angular/core';
import { ICar, ICarsResponse } from '../../types';
import { Apollo, Query, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars = signal<ICar[]>([]);

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

  getCarsSignal() {
    return this.cars;
  }
}
