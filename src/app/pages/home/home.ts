// src/app/pages/home/home.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',      // <-- CORRIGIDO
  styleUrls: ['./home.scss']        // <-- CORRIGIDO
})
export class HomeComponent { // <-- 'export' ADICIONADO

}