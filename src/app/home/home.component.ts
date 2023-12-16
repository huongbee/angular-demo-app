import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../services/housing.service';
import { Housinglocation } from '../housinglocation';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by name" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
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
    this.housingService.getAllHousingLocations().then((result) => {
      this.housingLocationList = result;
    });
  }
  filterResults(text: string) {
    if (!text) {
      this.housingLocationList = this.housingLocationList;
      return;
    }
    this.housingLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
