// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // <-- CORRIGIDO para usar o app.config normal
import { AppComponent } from './app/app';

// Use o appConfig importado
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));