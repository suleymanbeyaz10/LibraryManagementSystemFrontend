import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { BookDetail } from '../models/bookDetail';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl = 'https://localhost:44351/api/books/';
  apiUrl2 = 'https://localhost:44351/api/borrowedbooks/';
  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<ListResponseModel<BookDetail>> {
    let newPath: string = this.apiUrl + "getall";
    return this.httpClient.get<ListResponseModel<BookDetail>>(newPath);
  }

  borrowedBook(book: Book): Observable<ListResponseModel<Book>> {
    let newPath: string = this.apiUrl + "add";
    return this.httpClient.post<ListResponseModel<Book>>(newPath, book);
  }
}