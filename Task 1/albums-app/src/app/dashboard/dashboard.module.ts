import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { AlbumsModule } from '../albums/albums.module';

@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [AlbumsModule],
})
export class DashboardModule {}
