import { Book } from './../../models/book.model';
import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  bookForm = this.formBuilder.group<Book>({
    title:'',
    description: '',
    published: false,
  });

  constructor(private formBuilder: FormBuilder, private bookService: BookService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process checkout data here
    console.log(this.bookForm);
    this.bookService.addBook(this.bookForm.value as Book);

  }
}
