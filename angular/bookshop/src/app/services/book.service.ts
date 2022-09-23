import { BASE_URL, BOOK_API_PATH } from './../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  BOOK_API_URL = `${BASE_URL}${BOOK_API_PATH}`;
  selected$: Subject<Book | undefined> = new Subject<Book | undefined>();
  constructor(
    private httpClient: HttpClient,
  ) { }

  getBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.BOOK_API_URL);
  }

  getBook(id: number) : Observable<Book>{
    return this.httpClient.get<Book>(`${this.BOOK_API_URL}/${id}`);
  }

  getBooksByTitle(title: string) : Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.BOOK_API_URL}`, {params: {title}})
  }

  getBookByProperties(book: Book): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.BOOK_API_URL}`, {params: {...book}})
  }

  addBook(book: Book){
    this.httpClient.post(this.BOOK_API_URL, book).subscribe(console.log);
  }

  deleteBook(id: number){
    this.httpClient.delete(`${this.BOOK_API_URL}/${id}`).subscribe(console.log);
  }

}
