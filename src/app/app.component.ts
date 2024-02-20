import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {MainHeaderComponent} from "./core/main-header/main-header.component";
import {MainFooterComponent} from "./core/main-footer/main-footer.component";
import {MatProgressBar} from "@angular/material/progress-bar";
import {LoadingStatusService} from "./modules/utility/services/status-management/loading-status.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainHeaderComponent, MainFooterComponent, MatProgressBar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-web-app';

  constructor(public loadingStatusService: LoadingStatusService) {
  }
}
