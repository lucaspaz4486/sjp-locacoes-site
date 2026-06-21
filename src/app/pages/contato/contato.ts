import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contato.html',
  styleUrls: ['./contato.scss'],
  /* Desliga as verificações contínuas do Angular para poupar processamento */
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContatoComponent {}
