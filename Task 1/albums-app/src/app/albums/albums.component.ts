import { Component, OnInit } from '@angular/core';
import axios from 'axios';

import { Data as Album } from '../interfaces/data';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  async ngOnInit(): Promise<void> {
    interface Response {
      data: Album[];
    }
    const response: Response = await axios.get(
      'https://jsonplaceholder.typicode.com/albums'
    );
    this.albums = response.data;
  }
  albums!: Album[];
  isAlbumsListView: boolean = true;
  selectedAlbum!: Album;

  handleAlbumSelect(album: Album) {
    this.selectedAlbum = album;
  }

  handleAlbumDelete(id: number) {
    const newAlbums: Album[] = this.albums.filter((album) => album.id !== id);
    this.albums = [...newAlbums];
  }

  handleAlbumCreate(album: Album) {
    this.albums = [...this.albums, album];
  }

  handleAlbumUpdate(updatedTitle: string) {
    this.showUpdateForm;
    this.albums.map((album) => {
      if (album.id === this.selectedAlbum.id) {
        return (album.title = updatedTitle);
      }
      return null;
    });
  }

  get showUpdateForm() {
    return (this.isAlbumsListView = !this.isAlbumsListView);
  }
}
