import { Component, Input, input } from '@angular/core';
import { Job } from '../../interfaces/jobs.interface';
import { ToggleFavoriteDirective } from '../../directives/toggle-favorite.directive';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-list-item',
  standalone: true,
  imports: [CommonModule, ToggleFavoriteDirective, RouterLink],
  templateUrl: './job-list-item.component.html',
  styleUrl: './job-list-item.component.css'
})
export class JobListItemComponent {
  job = input.required<Job>();
  displayToggleFavorites = input<boolean>(false);
}
