import { Component, Inject, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  /* Otimiza a performance bloqueando verificações desnecessárias do Angular */
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private currentTheme: string = 'light';

  /* Excelente uso do Renderer2. Evita manipulação direta do DOM, protegendo o app em ambientes SSR */
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) {}

  changeTheme(theme: string): void {
    // Evita reprocessamento se o usuário clicar no tema que já está ativo
    if (this.currentTheme === theme) return;

    this.renderer.removeClass(this.document.body, `theme-${this.currentTheme}`);
    this.renderer.addClass(this.document.body, `theme-${theme}`);

    this.currentTheme = theme;
  }
}
