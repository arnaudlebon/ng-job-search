import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { JobsFavoritesService } from '../services/jobs/favorites/favorites.service';

@Directive({
  selector: '[appToggleFavorite]',
  standalone: true,
})
export class ToggleFavoriteDirective {
  @Input('appToggleFavorite') jobId!: number;

  constructor(private jobsFavoritesService: JobsFavoritesService) {}

  @HostBinding('class.active') get isFavorite() {
    return this.jobsFavoritesService.favorites().includes(this.jobId);
  }

  @HostListener('click') toggleFavorite() {
    this.jobsFavoritesService.toggleFavorite(this.jobId);
  }
}
