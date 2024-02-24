import { Component } from '@angular/core';

import { AuthorizationComponentModel } from './authorization.component.model';

@Component({
  selector: 'tr-authorization',
  standalone: true,
  imports: [],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})
export class AuthorizationComponent implements AuthorizationComponentModel {}
