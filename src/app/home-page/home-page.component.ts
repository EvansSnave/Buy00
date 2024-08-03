import { Component, OnInit } from '@angular/core';
import { WelcomeComponent } from '../components/welcome/welcome.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [WelcomeComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}