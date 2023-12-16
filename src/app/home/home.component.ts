import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <br />
    <section>
      <div>
        <ul style="list-style-type: a">
          <li>
            In the attributes of tag, use syntax [attributeName]="variableName"
          </li>
          <li>
            In the html, use syntax double {{ myTag }} to show value of variable
          </li>
        </ul>
        <h2 [class]="name">{{ name }}</h2>
      </div>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housing of housingLocationList"
        [house]="housing"
      ></app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name = 'Chivas';
  myTag = '{{}}';
  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
