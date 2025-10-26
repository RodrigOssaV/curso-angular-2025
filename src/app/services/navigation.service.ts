import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private previousUrl: string | null = null;
  private generation: string | null = null;

    constructor(private router: Router) {
    this.router.events
      .pipe(filter((event): event is NavigationStart => event instanceof NavigationStart))
      .subscribe((event) => {
        const prev = this.previousUrl;
        this.previousUrl = event.url;

        if (prev?.includes('/generation/generation-')) {
          const match = prev.match(/generation\/(generation-[a-z0-9-]+)/i);
          this.generation = match ? match[1] : null;
        }
      });
  }

  getGeneration() {
    return this.generation;
  }
}
