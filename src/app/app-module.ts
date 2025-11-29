import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BookList } from './book-list/book-list';
import { ProgressPipe } from './progress-pipe';

@NgModule({
  declarations: [
    BookList,
    ProgressPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [BookList]
})
export class AppModule { }
