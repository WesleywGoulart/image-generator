import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PixabayService {
  private apiKey = 'SUA_API_KEY';
  private baseUrl = 'https://pixabay.com/api/';

  constructor(private http: HttpClient) { }

  searchImages(query: string, perPage: number = 20) {
    const url = `${this.baseUrl}?key=${this.apiKey}&q=${query}&per_page=${perPage}`;

    return this.http.get(url);
  }
}