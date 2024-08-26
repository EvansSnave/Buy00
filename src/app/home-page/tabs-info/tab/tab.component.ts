import { Component, OnInit, input } from '@angular/core';
import { TabsInfoComponent } from '../tabs-info.component';

@Component({
  selector: 'tab',
  standalone: true,
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  title = input<string>();

  constructor(private tabsInfo: TabsInfoComponent) { }

  ngOnInit() {
    this.tabsInfo.addTab(this);
  }

  isActive(): boolean {
    return this.tabsInfo.isActive(this);
  }

}
