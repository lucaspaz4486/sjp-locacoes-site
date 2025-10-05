import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Equipment, EQUIPMENTS } from '../../data/mock-equipments'; // Importa os dados
import { EquipmentCardComponent } from '../../components/equipment-card/equipment-card'; // Importa o cartão

@Component({
  selector: 'app-equipamentos',
  standalone: true,
  imports: [
    CommonModule,
    EquipmentCardComponent // Adiciona o cartão aos imports
  ],
  templateUrl: './equipamentos.html',
  styleUrls: ['./equipamentos.scss']
})
export class EquipamentosComponent {
  // Expõe a lista de equipamentos para o template HTML
  equipments: Equipment[] = EQUIPMENTS;
}