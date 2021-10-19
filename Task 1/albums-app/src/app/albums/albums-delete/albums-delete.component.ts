import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data as Album } from 'src/app/interfaces/data';

@Component({
  selector: 'app-albums-delete',
  templateUrl: './albums-delete.component.html',
  styleUrls: ['./albums-delete.component.scss'],
})
export class AlbumsDeleteComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() selectedAlbum!: Album;
  @Input() isAlbumsListView!: boolean;
  @Output() onAlbumDelete = new EventEmitter<number>();

  handleAlbumDelete() {
    this.onAlbumDelete.next(this.selectedAlbum.id);
  }
}
