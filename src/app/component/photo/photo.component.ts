import { Component } from '@angular/core';
import { PhotoService } from 'src/app/service/photo.service';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  keyword = '';
  photos: any[] = [];

  constructor(private photoService: PhotoService) { }

  search() {
    this.photoService.search(this.keyword)
      .then((photos: any[]) => {
        this.photos = photos;
      });
  }
}
