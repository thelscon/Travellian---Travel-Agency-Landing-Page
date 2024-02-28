import { Component } from '@angular/core';

import { NavigationComponentModel } from './navigation.component.model';

@Component({
  selector: 'tr-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements NavigationComponentModel {
}
