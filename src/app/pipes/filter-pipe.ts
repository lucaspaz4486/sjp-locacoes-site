import { Pipe, PipeTransform } from '@angular/core';
import { Equipment } from '../data/mock-equipments';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(items: Equipment[], searchText: string): Equipment[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter((item) => {
      return item.name.toLowerCase().includes(searchText);
    });
  }
}
