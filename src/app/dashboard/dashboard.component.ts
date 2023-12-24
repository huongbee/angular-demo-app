import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../interfaces/hero';
import { HeroService } from '../services/hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HeroDetailComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}
  ngOnInit(): void {
    return this.getTopHeros();
  }
  getTopHeros(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(0, 5)));
  }

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}
