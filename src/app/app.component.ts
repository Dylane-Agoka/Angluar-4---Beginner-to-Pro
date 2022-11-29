import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular App';

  post = {
    title: 'post',
    isFavorite: true
  }

  onFavoriteChanged() {
    console.log("Favorite changed");
  }
}
