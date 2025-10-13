import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Equipment } from '../../data/mock-equipments';

@Component({
  selector: 'app-equipment-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipment-card.html',
  styleUrls: ['./equipment-card.scss']
})
export class EquipmentCardComponent {
  @Input() equipment!: Equipment;
}