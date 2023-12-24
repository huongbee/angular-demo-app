import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Hero } from '../interfaces/hero';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heros',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, HeroDetailComponent],
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.css',
})
export class HerosComponent {
  selectedHero?: Hero;

  heroes: Hero[] = HEROES;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
