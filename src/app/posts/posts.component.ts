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
      .subscribe(response => {
        this.posts = response;
    });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value};
    input.value = '';
    this.postService.createPost(post)
      .subscribe(() => {
        this.posts.splice(0, 0, post);
    });
  }

  updatePost(post) {
    this.postService.updatePost(post)
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post) {
    this.postService.deletePost(post.id)
      .subscribe(() => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        console.log(`${post.title} was deleted with successful.`);

      });
  }

}
