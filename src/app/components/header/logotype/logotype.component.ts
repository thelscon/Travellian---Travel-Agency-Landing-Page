import { Component } from '@angular/core';

import { WindowService } from '../../../services/window/window.service';
import { LogotypeComponentModel } from './logotype.component.model';

@Component({
  selector: 'tr-logotype',
  standalone: true,
  imports: [],
  templateUrl: './logotype.component.html',
  styleUrl: './logotype.component.scss'
})
export class LogotypeComponent implements LogotypeComponentModel {
  get windowWidth () {
    return this.windowService.width
  }
  
  constructor (
    private readonly windowService : WindowService
  ) {}
}
