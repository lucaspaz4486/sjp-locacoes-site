import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Equipment } from '../../data/mock-equipments';

@Component({
  selector: 'app-equipment-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipment-card.html',
  styleUrls: ['./equipment-card.scss'],
  /* Otimiza a performance bloqueando verificações desnecessárias do Angular */
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EquipmentCardComponent {
  /* O modificador 'required' garante segurança na tipagem e previne erros de renderização */
  @Input({ required: true }) equipment!: Equipment;
}
