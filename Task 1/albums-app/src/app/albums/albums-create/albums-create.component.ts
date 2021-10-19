import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data as Album } from 'src/app/interfaces/data';

@Component({
  selector: 'app-albums-create',
  templateUrl: './albums-create.component.html',
  styleUrls: ['./albums-create.component.scss'],
})
export class AlbumsCreateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() isAlbumsListView!: boolean;
  @Output() onAlbumCreate = new EventEmitter<Album>();

  handleAlbumCreate() {
    const newAlbum: Album = {
      title: 'New title',
      userId: Math.floor(Math.random() * 10000),
      id: Math.floor(Math.random() * 10000),
    };
    this.onAlbumCreate.next(newAlbum);
  }
}
