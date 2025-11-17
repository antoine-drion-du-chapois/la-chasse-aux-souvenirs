import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Congrats } from './components/congrats/congrats';
import { Landing } from './landing/landing';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'home', component: Home },
  { path: 'congrats', component: Congrats },
];
