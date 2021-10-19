import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-albums-update',
  templateUrl: './albums-update.component.html',
  styleUrls: ['./albums-update.component.scss'],
})
export class AlbumsUpdateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() isAlbumsListView!: boolean;
  @Output() onAlbumUpdate = new EventEmitter<string>();

  title = new FormControl('');

  handleSubmit({ value: updatedTitle }: FormControl) {
    this.onAlbumUpdate.next(updatedTitle);
  }
}
