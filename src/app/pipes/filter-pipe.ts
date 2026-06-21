import { Pipe, PipeTransform } from '@angular/core';
import { Equipment } from '../data/mock-equipments';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(items: Equipment[], searchText: string): Equipment[] {
    if (!items) return [];
    if (!searchText) return items;

    // Normaliza o termo de busca: remove acentos e joga para minúsculo
    const normalizedSearch = this.normalizeText(searchText);

    return items.filter((item) => {
      // Busca tanto no nome quanto na categoria ou descrição (se você adicionar depois)
      const name = this.normalizeText(item.name);
      const category = this.normalizeText(item.category);

      return name.includes(normalizedSearch) || category.includes(normalizedSearch);
    });
  }

  /**
   * Remove acentos e converte para minúsculo para garantir que
   * "Andaime" e "andaime" ou "coração" e "coracao" sejam tratados como iguais.
   */
  private normalizeText(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD') // Decompõe os caracteres (ex: 'á' vira 'a' + '´')
      .replace(/[\u0300-\u036f]/g, ''); // Remove os sinais diacríticos (acentos)
  }
}
