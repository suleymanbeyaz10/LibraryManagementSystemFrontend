import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-borrowed-book',
  templateUrl: './borrowed-book.component.html',
  styleUrls: ['./borrowed-book.component.css']
})
export class BorrowedBookComponent implements OnInit {

  // borrowedBookForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private bookService: BookService) { }

  // createBorrowedBookForm() {
  //   this.borrowedBookForm = this.formBuilder.group({
  //     bookName: ["", Validators.required],

  //   });
  // }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}