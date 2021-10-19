import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsComponent } from './albums.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumsUpdateComponent } from './albums-update/albums-update.component';
import { AlbumsDeleteComponent } from './albums-delete/albums-delete.component';
import { AlbumsCreateComponent } from './albums-create/albums-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumsListComponent,
    AlbumsUpdateComponent,
    AlbumsDeleteComponent,
    AlbumsDeleteComponent,
    AlbumsCreateComponent,
    AlbumsUpdateComponent,
  ],
  exports: [AlbumsComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class AlbumsModule {}
