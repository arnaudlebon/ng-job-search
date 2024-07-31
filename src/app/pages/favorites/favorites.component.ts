import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { JobListItemComponent } from '../../components/job-list-item/job-list-item.component';
import { JobsListService } from '../../services/jobs/list/jobs-list.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, JobListItemComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent {
  protected readonly jobsListService = inject(JobsListService);
  protected jobFavorites$ = this.jobsListService.jobsFavoritesList$;
}
