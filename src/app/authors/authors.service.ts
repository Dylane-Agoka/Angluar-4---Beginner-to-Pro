import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAuthors() {
    return ['Emmanuel Simone', 'Shaker pique', 'Marc Anthony'];
  }
}
