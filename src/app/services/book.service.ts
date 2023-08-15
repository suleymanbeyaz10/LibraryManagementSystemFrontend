import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { BookDetail } from '../models/bookDetail';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl = 'http://localhost:3000/api/books';
  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<ListResponseModel<BookDetail>> {

    let newPath = this.apiUrl + '/getall';
    return this.httpClient.get<ListResponseModel<BookDetail>>(this.apiUrl);
  }

}
