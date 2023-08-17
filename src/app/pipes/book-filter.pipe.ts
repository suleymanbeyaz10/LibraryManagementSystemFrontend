import { Pipe, PipeTransform } from '@angular/core';
import { BookDetail } from '../models/bookDetail';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(value: BookDetail[], searchText: string): BookDetail[] {

    searchText = searchText ? searchText.toLocaleLowerCase() : "";
    return searchText ? value.filter((bd: BookDetail) => bd.bookName.toLocaleLowerCase().indexOf(searchText) || bd.author.toLocaleLowerCase().indexOf(searchText) || bd.publisher.toLocaleLowerCase().indexOf(searchText) !== -1) : value;
  }
}
