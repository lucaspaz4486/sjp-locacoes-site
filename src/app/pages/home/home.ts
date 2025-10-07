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
    { name: 'Concreto', icon: 'fa-solid fa-cube', link: 'Concreto' },
    { name: 'Demolição', icon: 'fa-solid fa-hammer', link: 'Demolição' },
    { name: 'Andaime', icon: 'fa-solid fa-layer-group', link: 'Andaime' },
    {
      name: 'Compactação',
      icon: 'fa-solid fa-down-left-and-up-right-to-center',
      link: 'Compactação',
    },
  ];
}
