import { Component,computed, signal } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'tabs-info',
  templateUrl: './tabs-info.component.html',
  standalone: true,
  imports: [TabComponent],
  styleUrls: ['./tabs-info.component.scss']
})
export class TabsInfoComponent {

  private tabs = signal<TabComponent[]>([]);
  private activeTab = signal<TabComponent | null>(null);

  addTab(tab: TabComponent) {
    this.tabs.update((tabs) => [...tabs, tab]);

    if (this.tabs().length === 1) {
      this.selectTab(tab)
    }
  };

  selectTab(tab: TabComponent) {
    this.activeTab.set(tab)
  };

  isActive(tab: TabComponent): boolean {
    return this.activeTab() === tab;
  }

}
