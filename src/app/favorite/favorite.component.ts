import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  constructor() { }
  icons = ['bi bi-star', 'bi bi-star-fill'];
  isFavorite = false;
  ngOnInit(): void {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }

  targetIcon() {
    return (this.isFavorite) ? this.icons[0] : this.icons[1];
  }

}
