import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {

  @Input('likesCount') likesCount = 0;
  @Input('isActive') isActive = false;

  onClick() {
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }
}
