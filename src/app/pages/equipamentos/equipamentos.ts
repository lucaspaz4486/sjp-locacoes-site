// src/app/pages/equipamentos/equipamentos.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Equipment, EQUIPMENTS } from '../../data/mock-equipments';
import { EquipmentCardComponent } from '../../components/equipment-card/equipment-card';
import { FilterPipe } from '../../pipes/filter-pipe';

@Component({
  selector: 'app-equipamentos',
  standalone: true,
  imports: [CommonModule, FormsModule, EquipmentCardComponent, FilterPipe],
  templateUrl: './equipamentos.html',
  styleUrls: ['./equipamentos.scss'],
})
export class EquipamentosComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  private allEquipments: Equipment[] = EQUIPMENTS;

  // Propriedades para os filtros
  equipments: Equipment[] = [];
  searchTerm: string = '';

  categories: string[] = [];
  selectedCategory: string = 'Todos';

  ngOnInit(): void {
    this.categories = ['Todos', ...new Set(this.allEquipments.map((item) => item.category))];

    this.route.queryParams.subscribe((params) => {
      const categoryFromUrl = params['categoria'];

      if (categoryFromUrl && this.categories.includes(categoryFromUrl)) {
        this.filterByCategory(categoryFromUrl);
      } else {
        this.filterByCategory('Todos');
      }
    });
  }

  // Função de filtro
  filterByCategory(category: string): void {
    this.selectedCategory = category;

    if (category === 'Todos') {
      this.equipments = this.allEquipments;
    } else {
      this.equipments = this.allEquipments.filter((item) => item.category === category);
    }
  }
}
