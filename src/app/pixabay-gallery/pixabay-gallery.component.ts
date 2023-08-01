import { Component, OnInit } from '@angular/core';
import { PixabayService } from '../pixabay.service';

@Component({
  selector: 'app-pixabay-gallery',
  templateUrl: './pixabay-gallery.component.html',
  styleUrls: ['./pixabay-gallery.component.css']
})

export class PixabayGalleryComponent implements OnInit {
  defaultSearchTerms: string[] = ['nature', 'city', 'animals', 'food', 'travel'];
  searchTerm: string = '';
  images: any[] = [];

  constructor(private pixabayService: PixabayService) {}

  ngOnInit() {
    this.getRandomThemeImages();
  }

  getRandomThemeImages() {
    const randomTerm = this.defaultSearchTerms[Math.floor(Math.random() * this.defaultSearchTerms.length)];
    this.searchImages(randomTerm, 200);
  }

  searchImages(query: string, perPage: number) {
    this.pixabayService.searchImages(query, perPage).subscribe((response: any) => {
      this.images = response.hits;
    });
  }
}