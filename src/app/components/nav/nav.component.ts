import { Component, OnInit } from '@angular/core';
import { MainButtonComponent } from '../main-button/main-button.component';

@Component({
  selector: 'nav-app',
  standalone: true,
  imports: [MainButtonComponent],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
