import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Equipment, EquipmentCategory, EQUIPMENTS } from '../../data/mock-equipments';
import { EquipmentCardComponent } from '../../components/equipment-card/equipment-card';
import { FilterPipe } from '../../pipes/filter-pipe';

/* Tipagem que aceita as categorias do Mock E a string 'Todos' */
type FilterCategory = EquipmentCategory | 'Todos';

@Component({
  selector: 'app-equipamentos',
  standalone: true,
  imports: [CommonModule, FormsModule, EquipmentCardComponent, FilterPipe],
  templateUrl: './equipamentos.html',
  styleUrls: ['./equipamentos.scss'],
})
export class EquipamentosComponent implements OnInit {
  private allEquipments: Equipment[] = EQUIPMENTS;

  equipments: Equipment[] = [];
  searchTerm: string = '';
  categories: FilterCategory[] = [];
  selectedCategory: FilterCategory = 'Todos';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // 1. Extrai os valores únicos mapeando o mock e converte o Set em um Array puro nativo
    const uniqueCategories = Array.from(new Set(this.allEquipments.map((item) => item.category)));

    // 2. Monta o array final e diz ao TypeScript que a união de 'Todos' com o resto é segura
    this.categories = ['Todos', ...uniqueCategories] as FilterCategory[];

    this.route.queryParams.subscribe((params) => {
      const categoryFromUrl = params['categoria'] as FilterCategory;

      if (categoryFromUrl && this.categories.includes(categoryFromUrl)) {
        this.filterByCategory(categoryFromUrl);
      } else {
        this.filterByCategory('Todos');
      }
    });
  }

  filterByCategory(category: FilterCategory): void {
    this.selectedCategory = category;

    if (category === 'Todos') {
      this.equipments = [...this.allEquipments];
    } else {
      this.equipments = this.allEquipments.filter((item) => item.category === category);
    }
  }
}
