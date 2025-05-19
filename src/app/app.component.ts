import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'school-app';
  likeStats = {
    quote: "Sharing is good, and with digital technology, sharing is easy. - Richard Stallman",
    isLiked: false,
    likeCount: 6
  }

  heartButtonClicked(liked: boolean) {
    this.likeStats.isLiked = liked;
    this.likeStats.likeCount += liked ? 1 : -1;
  }

}