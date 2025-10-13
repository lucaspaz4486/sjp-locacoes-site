import { Component, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {
  private currentTheme: string = 'light';

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {}

  changeTheme(theme: string): void {
    this.renderer.removeClass(this.document.body, `theme-${this.currentTheme}`);

    this.renderer.addClass(this.document.body, `theme-${theme}`);

    this.currentTheme = theme;
  }
}
