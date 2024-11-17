import { Component, OnInit } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { TabsInfoComponent } from './tabs-info/tabs-info.component';
import { TabComponent } from './tabs-info/tab/tab.component';
import { CarsService } from '../../services/cars/cars.service';
import { FeaturesComponent } from './features/features.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    WelcomeComponent, 
    TabsInfoComponent, 
    TabComponent,
    FeaturesComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  cars = this.carsService.getCarsSignal();

  constructor(private carsService: CarsService) { }

  ngOnInit() {

  }

}
