import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomeComponent {
  featuredCategories = [
    { name: 'Andaime', icon: 'fa-solid fa-tower-observation', link: 'Andaime' },
    { name: 'Concreto', icon: 'fa-solid fa-cubes', link: 'Concreto' },
    { name: 'Demolição', icon: 'fa-solid fa-hammer', link: 'Demolição' },
    { name: 'Escoras', icon: 'fa-solid fa-building-columns', link: 'Escoras' },
    { name: 'Serra', icon: 'fa-solid fa-scissors', link: 'Serra' },
  ];
}
