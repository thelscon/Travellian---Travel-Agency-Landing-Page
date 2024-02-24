import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';

import { WindowServiceModel } from './window.service.model';

@Injectable({
  providedIn: 'root'
})
export class WindowService implements WindowServiceModel {
  #width = window.innerWidth
  get width () {
    return this.#width
  }

  constructor () {
    fromEvent (window , 'resize')
      .subscribe (() => {
        this.#width = window.innerWidth
      })
  }
}
