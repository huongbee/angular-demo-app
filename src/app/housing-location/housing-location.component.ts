import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="house.photo"
        alt="Exterior photo of {{ house.name }}"
      />
      <h2 class="listing-heading">
        {{ house.name }}
      </h2>
      <p class="listing-location">{{ house.city }}, {{ house.state }}</p>
      <a [routerLink]="['/details', house.id]">Learn More</a>
    </section>
  `,
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  @Input() house!: Housinglocation;
}
