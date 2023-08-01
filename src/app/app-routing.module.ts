import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PixabayGalleryComponent } from './pixabay-gallery/pixabay-gallery.component';
const routes: Routes = [
  { path: 'img-generator', component: PixabayGalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
