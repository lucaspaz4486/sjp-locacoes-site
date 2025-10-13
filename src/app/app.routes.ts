import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { EquipamentosComponent } from './pages/equipamentos/equipamentos';
import { ContatoComponent } from './pages/contato/contato';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipamentos', component: EquipamentosComponent },
  { path: 'contato', component: ContatoComponent },
];
