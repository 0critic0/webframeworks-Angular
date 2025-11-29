import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'; 
import { Book } from './book-list/book-list';

@Injectable({
  providedIn: 'root',
})

export class BookData {
  constructor(private http: HttpClient) { }

private apiBaseUrl = 'http://localhost:3000/api/';

  public getBooks(): Promise<Book[]> {
    const url: string = `${this.apiBaseUrl}library`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Book[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

}
