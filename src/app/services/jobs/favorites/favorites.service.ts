import { Injectable, Signal, effect, inject, signal } from '@angular/core';
import { StorageService } from '../../storage/storage.service';
import { JobId, JobIds } from '../../../interfaces/jobs.interface';

@Injectable({
  providedIn: 'root',
})
export class JobsFavoritesService {
  private readonly FAVORITES_KEY = 'favorites';
  private storage = inject(StorageService<JobIds>);
  private favoritesSignal = signal<JobIds>(
    this.storage.get(this.FAVORITES_KEY)
  );

  constructor() {
    effect(() => this.storage.set(this.FAVORITES_KEY, this.favoritesSignal()));
  }

  get favorites(): Signal<JobIds> {
    return this.favoritesSignal.asReadonly();
  }

  toggleFavorite(id: JobId): void {
    const favorites = this.favoritesSignal();
    const isFavorite = favorites.includes(id);
    const updatedFavorites = isFavorite ? favorites.filter((fav) => fav !== id) : [...favorites, id];
    this.favoritesSignal.set(updatedFavorites);
  }
}
