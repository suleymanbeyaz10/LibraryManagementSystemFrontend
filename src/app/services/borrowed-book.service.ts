import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BorrowedBookService {

  apiUrl = 'https://localhost:44351/api/BorrowedBooks/add'
  constructor(private httpClient: HttpClient) { }

  addBorrowedBook(borrowedBook: any) {
    return this.httpClient.post(this.apiUrl, borrowedBook);
  }
}
