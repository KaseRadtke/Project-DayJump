import { Routes } from '@angular/router';
import {Home} from './shell/home/home';
import {Game} from './game/game/game';
import {Stats} from './shell/stats/stats';
import {Leaderboard} from './shell/leaderboard/leaderboard';

// src/app/app.routes.ts
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'game', component: Game },
  { path: 'stats', component: Stats },
  { path: 'leaderboard', component: Leaderboard },
];
