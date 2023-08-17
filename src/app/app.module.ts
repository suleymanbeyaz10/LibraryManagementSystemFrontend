import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { NaviComponent } from './components/navi/navi.component';
import { BookFilterPipe } from './pipes/book-filter.pipe';
import { CategoryComponent } from './components/category/category.component';
import { AuthorComponent } from './components/author/author.component';
import { PublisherComponent } from './components/publisher/publisher.component';
// import { BorrowedBookComponent } from './components/borrow-the-book/borrow-the-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    NaviComponent,
    BookFilterPipe,
    CategoryComponent,
    AuthorComponent,
    PublisherComponent
    // BorrowedBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // ngModel için gerekli
    HttpClientModule,
    ReactiveFormsModule // reactive form için gerekli
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
