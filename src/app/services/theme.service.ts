import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private themeLinkElement!: HTMLLinkElement;

  constructor(
    private rendererFactory: RendererFactory2,
    private http: HttpClient
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.initializeThemeLinkElement();
  }

  private initializeThemeLinkElement() {
    this.themeLinkElement = this.renderer.createElement('link');
    this.themeLinkElement.rel = 'stylesheet';
    this.themeLinkElement.id = 'theme-link';
    this.renderer.appendChild(document.head, this.themeLinkElement);
  }

  setTheme(theme: string) {
    const themeUrl = `assets/themes/${theme}-theme.css`;
    this.themeLinkElement.href = themeUrl;
  }
}
