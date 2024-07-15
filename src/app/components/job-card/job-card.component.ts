import { Component, input } from '@angular/core';
import { JobDetails } from '../../interfaces/jobs.interface';
import { CommonModule } from '@angular/common';
import { ToggleFavoriteDirective } from '../../directives/toggle-favorite.directive';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule, ToggleFavoriteDirective],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent {
  job = input.required<JobDetails>()
}
