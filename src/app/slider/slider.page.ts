import { Component, OnInit } from '@angular/core';
import { ISlider } from 'src/app/models/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage implements OnInit {
  sliderConfiguration: ISlider[];
  constructor() { }
  
  /**
   * Initializes slider configuration
   */
  ngOnInit() {
    this.sliderConfiguration = [
      {
        image: 'app_1.jpg',
        title: 'APP PREVIEW',
        description: 'Hier ist ein Einblick in die H.O.P.E. App und den derzeitigen Entwicklungsstand.'
      },
      {
        image: 'app_2.jpg',
        title: 'homescreen',
        description: 'Das ist der Home Screen. Hier begrüßt dich Jimmy und du siehtst deine H.O.P.E. Points.'
      },
      {
        image: 'app_3.jpg',
        title: 'ziele',
        description: 'Hier kannst du dir Klimaziele setzen, zu denen dich Jimmy dann motiviert.'
      },
      {
        image: 'app_4.jpg',
        title: 'auszeichnungen',
        description: 'Immer, wenn du Ziele erreichst, erhältst du Auszeichnungen.'
      },
      {
        image: 'app_5.jpg',
        title: 'hope4earth',
        description: 'Und du wählst, welches Klimaschutz-Projekt du mit deinen Punkten unterstützt.'
      },
      {
        image: 'app_6.jpg',
        title: 'jimmix',
        description: 'Außerdem wählst du hier, welches Outift dein Jimmy tragen soll.'
      }
    ]
  }

}
