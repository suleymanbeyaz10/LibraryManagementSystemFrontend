import { Component, OnInit } from '@angular/core';
import { BookDetail } from 'src/app/models/bookDetail';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  searchText = "";
  books: BookDetail[] = [];
  dataLoaded = false;

  constructor(private bookService: BookService) { }


  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(response => {
      this.books = response.data;
      this.dataLoaded = true;
    })
  }
}
