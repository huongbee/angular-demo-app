import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../services/hero.service';
import { Hero } from '../interfaces/hero';
@Component({
  selector: 'app-heros',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, HeroDetailComponent],
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.css',
})
export class HerosComponent {
  selectedHero?: Hero;
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroList) => (this.heroes = heroList));
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
