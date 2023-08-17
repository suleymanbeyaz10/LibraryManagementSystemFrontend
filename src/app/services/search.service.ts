import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiUrl = 'https://localhost:44351/api/Books/getbookdetails'
  constructor(private httpClient: HttpClient) { }

  private searchResultsSubject = new BehaviorSubject<any[]>([]);
  searchResults$ = this.searchResultsSubject.asObservable();

  setSearchResults(results: any[]) {
    this.searchResultsSubject.next(results);
  }

  searchBooks(searchText: string) {
    this.httpClient.get<any[]>(this.apiUrl + '?searchText=' + searchText).subscribe({
      next: (response) => {
        this.setSearchResults(response);
      },
      error: (error) => {
        console.log(error);
      }
    }
    );
  }
}
