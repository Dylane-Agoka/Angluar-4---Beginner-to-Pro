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

  updatePost(post) {
    // this.http.put(this.postsUrl, JSON.stringify(post));
    this.http.patch(this.postsUrl + '/' + post.id, JSON.stringify({ isRead: true, }))
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post) {
    this.http.delete(this.postsUrl + '/' + post.id)
      .subscribe(() => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        console.log(`${post.title} was deleted with successful.`);

      });
  }

}
