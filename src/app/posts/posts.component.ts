import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  posts;

  constructor(private http: HttpClient) {
    this.http.get(this.postsUrl).subscribe(response => {
      this.posts = response;
    });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value};
    this.http.post(this.postsUrl, JSON.stringify(post))
      .subscribe(() => {
        this.posts.splice(0, 0, post);
    });
  }

}
