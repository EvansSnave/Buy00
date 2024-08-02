import { Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'main-button',
  standalone: true,
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss']
})
export class MainButtonComponent implements OnInit {

  public text = input.required<string>();

  constructor() { }

  ngOnInit() {
  }

}
