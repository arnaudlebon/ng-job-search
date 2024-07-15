import { Routes } from '@angular/router';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  {
    path: 'jobs',
    loadComponent: () =>
      import('./components/jobs-list/jobs-list.component').then(
        (m) => m.JobsListComponent
      ),
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./components/favorites/favorites.component').then(
        (m) => m.FavoritesComponent
      ),
  },
];
