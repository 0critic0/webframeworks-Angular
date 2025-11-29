import {Component, OnInit } from '@angular/core';
import { BookData } from '../book-data'; 

export interface Book {
  _id: string;
  name: string;
  author: string;
  status: string;
  rating: number;
  genres: string[];
  totalPages: number;   
  pagesRead: number; 
}

@Component({
  selector: 'app-book-list',
  standalone: false,
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
  providers: [BookData]
})

export class BookList implements OnInit { 
constructor(private bookDataService: BookData) {}

books: Book[] =[];

private getBooks(): void {  
  this.bookDataService  
    .getBooks()  
    .then(foundBooks => {
      this.books = foundBooks;  
    });
}

ngOnInit(){
this.getBooks(); }
}