import { Component } from '@angular/core';

import { AuthorizationComponentModel } from './authorization.component.model';

@Component({
  selector: 'tr-authorization',
  standalone: true,
  imports: [],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})
export class AuthorizationComponent implements AuthorizationComponentModel {
  activeLoginButton = false
  activeSignUpButton = true
  
  login () {
    if (!this.activeLoginButton) {
      this.activeSignUpButton = false
      this.activeLoginButton = true
    }
  }

  signUp () {
    if (!this.activeSignUpButton) {
      this.activeLoginButton = false
      this.activeSignUpButton = true
    }
  }
}
