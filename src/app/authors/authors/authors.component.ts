import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  title = 'Authors';
  authors;

  constructor(private authorService: AuthorsService) {
    this.authors = authorService.getAuthors();
  }

  ngOnInit(): void {
  }

  getTotalAuthors () {
    return `${this.authors.length} Authors`;
  }
}
