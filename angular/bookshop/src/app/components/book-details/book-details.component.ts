import { BookService } from './../../services/book.service';
import { Book } from './../../models/book.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book?: Book;
  constructor(bookService: BookService) {
    bookService.selected$.subscribe((book?: Book) => this.book = book);
  }

  ngOnInit(): void {
  }

}
