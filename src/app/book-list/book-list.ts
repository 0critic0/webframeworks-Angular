import {Component, OnInit } from '@angular/core';

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
})

export class BookList implements OnInit { 
constructor() {}
books: Book[] = [{
	_id: '590d',
	name: 'Midnight Hollow',
	author: 'Holly Dean',
	status: 'Reading',  
	rating: 4,
	genres: ['Fantasy', 'Romance'] ,
        totalPages: 350,   
        pagesRead: 212 
},{
  _id: '591d',         
  name: 'Silent Evidence',
  author: 'Dr. Michael Chen',
  status: 'Complete',
  rating: 5,
  genres: ['Mystery', 'Crime'],
  totalPages: 420,
  pagesRead: 420
}];

ngOnInit(){}
}