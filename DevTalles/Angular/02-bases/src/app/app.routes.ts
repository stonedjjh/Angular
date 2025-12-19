import { Routes } from '@angular/router';
import { CounterPage } from './pages/counter/counter-page';
import { HeroPage } from './pages/hero/hero-page';
import { DragonBallPage } from './pages/dragonball/dragonball-page';


export const routes: Routes = [
  {
    path: '',
    component: CounterPage,
  },
  {
    path: 'hero',
    component: HeroPage,
  },
  {
    //Si no encuentra la ruta Redirigimos al CounterPage
    path: '**',
    redirectTo: '',
  },
  {
    path: 'dragonball',
    component: DragonBallPage,
  }
];
