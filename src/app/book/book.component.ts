import { Component } from '@angular/core';

@Component({
  selector: 'book',
  standalone: false,
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  bookTitle: string = "";
}
