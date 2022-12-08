import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{
  posts;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe(
        response => {
          this.posts = response;
        },
        error => {
          alert('An unexpected error occurred.');
          console.log(error);
        });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value};
    input.value = '';
    this.postService.createPost(post)
      .subscribe(
        () => {
          this.posts.splice(0, 0, post);
        },
        error => {
          alert('An unexpected error occurred.');
          console.log(error);
        });
  }

  updatePost(post) {
    this.postService.updatePost(post)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          alert('An unexpected error occurred.');
          console.log(error);
        });
  }

  deletePost(post) {
    this.postService.deletePost(345)
      .subscribe(
        () => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
          console.log(`${post.title} was deleted with successful.`);
        },
        (error: Response) => {
          if (error.status === 404) {
            alert('This post has already been deleted.');
          } else {
            alert('This post has already been deleted.');
            console.log(error);
          }
          alert('An unexpected error occurred.');
          console.log(error);
        });
  }
}
