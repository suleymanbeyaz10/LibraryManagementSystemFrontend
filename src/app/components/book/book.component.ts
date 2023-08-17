import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs';
import { BookDetail } from 'src/app/models/bookDetail';
import { BookService } from 'src/app/services/book.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  searchControl = new FormControl();

  apiUrl = 'https://localhost:44351/api/Books/getbookdetails'

  searchedBooks: BookDetail[] = [];
  books: BookDetail[] = [];
  searching = false;
  searchResults: any[] = [];
  r: any;
  setSearchResults(results: any) {
    if (results != undefined) {

      this.searchedBooks = results.data
      this.searching = true;
      this.changeDetectorRef?.detectChanges();
    }
  }

  constructor(private bookService: BookService, private searchService: SearchService, private changeDetectorRef: ChangeDetectorRef, private httpClient: HttpClient) {

    this.searchControl.valueChanges.pipe(
      debounceTime(300), // wait 300ms after the last event before emitting last event
      filter(text => text.length >= 3), // filter queries with less than 3 characters
      distinctUntilChanged(), // only emit if value is different from previous value
    ).subscribe(searchText => {

      this.httpClient.get<any[]>(this.apiUrl + '?searchText=' + searchText).subscribe({
        next: (response: any) => {
          this.searchedBooks = response.data as BookDetail[];
        },
        error: (error) => {
          console.log(error);
        }
      }
      );
    });
  }
  ngOnInit(): void {
    this.searchService.searchResults$.subscribe(this.setSearchResults);
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(response => {
      this.books = response.data;
    })
  }


}
