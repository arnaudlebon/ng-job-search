import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal, inject, signal } from '@angular/core';
import { JobListItemComponent } from '../../components/job-list-item/job-list-item.component';
import { JobsFavoritesService } from '../../services/jobs/favorites/favorites.service';
import { Jobs } from '../../interfaces/jobs.interface';
import { JobsListService } from '../../services/jobs/list/jobs-list.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, JobListItemComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent implements OnInit {
  private readonly jobsFavoritesService = inject(JobsFavoritesService)
  readonly jobsListService = inject(JobsListService);
  favoritesJobs!: Signal<Jobs>;

  ngOnInit() {
    this.listFavoritesJobs();
  }

  listFavoritesJobs() {
    const favorites = this.jobsFavoritesService.favorites();
    if (favorites && favorites.length > 0) {
      this.favoritesJobs = this.jobsListService.list(favorites);
    } else {
      this.favoritesJobs = signal<Jobs>([]);
    }
  }
}
