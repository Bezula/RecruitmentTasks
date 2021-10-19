import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Data as Album } from '../../interfaces/data';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss'],
})
export class AlbumsListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() albums!: Album[];
  @Input() selectedAlbum!: Album;

  @Output() onAlbumSelect = new EventEmitter<Album>();
  handleAlbumSelect(album: Album) {
    this.onAlbumSelect.next(album);
  }
}
