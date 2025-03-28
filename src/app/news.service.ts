import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private scriptLoaded = false;

  constructor() {}

  loadElfsightScript(): void {
    if (this.scriptLoaded) return; // Prevent duplicate script loading

    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.defer = true;
    script.onload = () => console.log('Elfsight script loaded');
    
    document.body.appendChild(script);
    this.scriptLoaded = true;
  }

  injectWidget(widgetId: string, containerId: string): void {
    this.loadElfsightScript();

    setTimeout(() => {
      const container = document.getElementById(containerId);
      if (container) {
        container.innerHTML = `<div class="elfsight-app-${widgetId}" data-elfsight-app-lazy=""></div>`;
      }
    }, 500);
  }
}
