// src/app/components/footer/footer.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',      // <-- CORRIGIDO
  styleUrls: ['./footer.scss']        // <-- CORRIGIDO
})
export class FooterComponent { // <-- 'export' ADICIONADO

}