import { Routes } from '@angular/router';
import { jobDetailsResolver } from './pages/job-details/job-details.resolver';

export const routes: Routes = [
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  {
    path: 'jobs',
    loadComponent: () =>
      import('./pages/jobs-list/jobs-list.component').then(
        (m) => m.JobsListComponent
      ),
  },
  {
    path: 'jobs/:jobId',
    loadComponent: () =>
      import('./pages/job-details/job-details.component').then(
        (m) => m.JobDetailsComponent
      ),
    resolve: { jobDetails: jobDetailsResolver }
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./pages/favorites/favorites.component').then(
        (m) => m.FavoritesComponent
      ),
  },
];
