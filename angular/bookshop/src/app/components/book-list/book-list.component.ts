import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books?: Book[];
  selected?: Book;

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books: Book[]) => this.books = books);
  }

  onListClick(book: Book){
    this.selected = book;
    this.bookService.selected$.next(this.selected);
  }

  onDeleteClick(){
    this.selected?.id &&  this.bookService.deleteBook(this.selected.id);
    this.bookService.getBooks().subscribe((books: Book[]) => this.books = books);
    this.selected = undefined;
    this.bookService.selected$.next(this.selected);
  }
}
