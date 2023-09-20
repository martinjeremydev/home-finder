import { Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { RegisterComponent } from './register/register.component';

export const AUTHENTICATION_ROUTES: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    providers: [],
    children: [
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];
