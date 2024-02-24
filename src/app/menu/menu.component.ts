import { Component } from '@angular/core';

import { WindowService } from '../services/window/window.service';

import { MenuComponentModel } from './menu.component.model';

@Component({
  selector: 'tr-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements MenuComponentModel {}
