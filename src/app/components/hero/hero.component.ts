import { Component } from '@angular/core';

import { HeroComponentModel } from './hero.component.model';

@Component({
  selector: 'tr-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements HeroComponentModel {}
