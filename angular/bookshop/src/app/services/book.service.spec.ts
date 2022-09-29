import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Book } from '../models/book.model';

import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookService],
      imports: [HttpClientModule, ReactiveFormsModule]
    });
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be logged in', (done: DoneFn) => {
    const expectedBook = {
      "id": 1,
      "title": "nisi labore quia",
      "description": "Voluptatem architecto explicabo ratione sed unde nostrum eos. Dolores alias non voluptas. Ipsam dicta rerum facere perferendis ut velit tenetur voluptas nostrum.",
      "published": true
    }
    service.getBook(1).subscribe({
      next: (book: Book) =>{
        expect(book).withContext('expected book 1').toEqual(expectedBook);
        done();
      error: done.fail
    }});

  });
});
