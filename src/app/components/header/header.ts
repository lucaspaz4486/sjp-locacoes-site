import { Component, Inject, Renderer2 } from '@angular/core'; // Adicione Inject e Renderer2
import { DOCUMENT } from '@angular/common'; // Adicione DOCUMENT
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  private currentTheme: string = 'light';

  // Injeta o documento e o Renderer2 para manipular o DOM de forma segura
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  // Função para trocar o tema
  changeTheme(theme: string): void {
    // Remove a classe de tema anterior do body
    this.renderer.removeClass(this.document.body, `theme-${this.currentTheme}`);

    // Adiciona a nova classe de tema
    this.renderer.addClass(this.document.body, `theme-${theme}`);

    // Atualiza o tema atual
    this.currentTheme = theme;
  }
}