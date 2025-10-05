// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { EquipamentosComponent } from './pages/equipamentos/equipamentos';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipamentos', component: EquipamentosComponent },
];