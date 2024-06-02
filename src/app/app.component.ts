import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-arch-learning';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.setTheme('default');
  }

  applyTheme($event: any): void {
    this.themeService.setTheme($event.target.value);
  }
}
