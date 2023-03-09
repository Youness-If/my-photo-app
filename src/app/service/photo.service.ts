import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiKey = '34243986-405cb737cccbd9c3d4631bf11';
  private apiUrl = `https://pixabay.com/api/?key=${this.apiKey}&per_page=20`;

  constructor(private http: HttpClient) { }

  search(keyword: string) {
    return this.http.get(`${this.apiUrl}&q=${keyword}`)
      .toPromise()
      .then((res: any) => {
        return res.hits.map((hit: any) => {
          return {
            image: hit.webformatURL,
            tags: hit.tags.split(','),
            comments: hit.comments,
            likes: hit.likes
          };
        });
      });
  }
}
