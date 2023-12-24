import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-hero',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-hero.component.html',
  styleUrl: './add-hero.component.css',
})
export class AddHeroComponent {
  powers: string[] = [
    'Really Smart',
    'Super Flexible',
    'Super Hot',
    'Weather Changer',
  ];
  addHeroForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    alterEgo: new FormControl(''),
    power: new FormControl(''),
  });

  constructor() {}
  ngOnInit(): void {}
  addHero(): void {
    console.log(this.addHeroForm.value);
  }
}
