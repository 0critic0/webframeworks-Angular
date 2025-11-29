import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpHeaders, HttpClientModule } from '@angular/common/http'; 

import { BookList } from './book-list/book-list';
import { ProgressPipe } from './progress-pipe';

@NgModule({
  declarations: [
    BookList,
    ProgressPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [BookList]
})
export class AppModule { }
