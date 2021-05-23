// Angular component
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

/**
 * Tabs page
 */
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  @ViewChild('pic', { static: false }) pic: ElementRef;

  public tabs = ['WOCHE', 'MONAT', 'SEASON'];
  public activeTab = 'WOCHE';
  public width;
  public height;

  private tabsData = [
    [
      {image: 'j_035.png', position: 1},
      {image: 'j_041.png', position: 2},
      {image: 'j_033.png', position: 3},
    ],
    [
      {image: 'j_041.png', position: 1},
      {image: 'j_035.png', position: 2},
      {image: 'j_033.png', position: 3},
    ],
    [
      {image: 'j_033.png', position: 1},
      {image: 'j_035.png', position: 2},
      {image: 'j_041.png', position: 3},
    ],
  ]
  private tabIndex = 0;

  /**
   * Life cycle method
   */
  constructor() {}

  /**
   * Ionic life cycle
   */
  ionViewDidEnter() {
    this.onLoad();
  }

  /**
   * Changes width and height
   */
  @HostListener('window:resize', ['$event'])
  public onLoad() {
    this.width = (this.pic.nativeElement as HTMLImageElement).width
  }

  /**
   * Returns image name
   * @param position position
   * @returns string
   */
  public getImageName(position: number) {
    if (this.tabsData[this.tabIndex]) {
      const data = this.tabsData[this.tabIndex].find(response => response.position === position)
      return data.image;
    }
  }

  /**
   * Sets active tab
   * @param tab tab
   * @param tabIndex tabIndex
   */
  public setActiveTab(tab, tabIndex) {
    this.activeTab = tab;
    this.tabIndex = tabIndex;
  }
}
