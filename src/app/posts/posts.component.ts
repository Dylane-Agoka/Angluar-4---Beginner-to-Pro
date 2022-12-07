import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  postsUrl = 'assets/posts.json';
  posts;

  constructor(private http: HttpClient) {
    this.http.get(this.postsUrl).subscribe(response => {
      this.posts = response as JSON;
    });
  }

}
