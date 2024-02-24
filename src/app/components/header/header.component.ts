import { Component } from '@angular/core';

import { WindowService } from '../../services/window/window.service';

import { HeaderComponentModel } from './header.component.model';
import { LogotypeComponent } from './logotype/logotype.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthorizationComponent } from './authorization/authorization.component';

@Component({
  selector: 'tr-header',
  standalone: true,
  imports: [
    LogotypeComponent ,
    NavigationComponent ,
    AuthorizationComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements HeaderComponentModel {
  get windowWidth () {
    return this.windowService.width
  }

  constructor (
    private readonly windowService : WindowService
  ) {}
}
