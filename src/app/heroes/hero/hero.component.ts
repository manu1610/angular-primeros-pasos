import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'clark';
  public age:  number = 56;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void{
    this.name = "Spiderman";
  }

  changeAge(): void{
    this.age = 48;
  }

  resetForm(): void{
    this.name = "clark"
    this.age = 56
  }

}
