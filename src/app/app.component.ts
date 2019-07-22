import {Component, HostBinding} from '@angular/core';
import {MatStepperNames} from './models/enums';

enum Theme {
  light = 'light',
  dark = 'dark'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  Theme: typeof Theme = Theme;
  matStepperNames = MatStepperNames;

  @HostBinding('class') theme = Theme.light;

  setTheme = (theme: Theme): void => {
    this.theme = theme;
  }
}
