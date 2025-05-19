import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'heart-button',
  standalone: false,
  templateUrl: './heart-button.component.html',
  styleUrl: './heart-button.component.css'
})
export class HeartButtonComponent {

  @Input('isLiked')
  liked: boolean = false;

  @Input('likeCount')
  likeCount: number = 0;

  @Output("likeClicked")
  likeClicked = new EventEmitter();

  onToggleLike() {
    this.liked = !this.liked
    this.likeClicked.emit(this.liked);
  }

}
