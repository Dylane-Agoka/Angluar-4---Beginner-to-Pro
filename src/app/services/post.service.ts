import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.postsUrl);
  }

  createPost(post) {
    return this.http.post(this.postsUrl, JSON.stringify(post));
  }

  updatePost(post) {
    return this.http.patch(this.postsUrl + '/' + post.id, JSON.stringify({ isRead: true, }));
  }

  deletePost(id) {
    return this.http.delete(this.postsUrl + '/' + id);
      // .pipe(
      //   catchError((error: Response) => {
      //     Observable.throw(new AppError)
  }
}
