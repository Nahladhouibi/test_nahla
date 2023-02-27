import { Component } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {
  posts: Post[] = [
    new Post('1', 'Titre 1', 'Contenu 1'),
    new Post('2', 'Titre 2', 'Contenu 2'),
    new Post('3', 'Titre 3', 'Contenu 3'),
    new Post('4', 'Titre 4', 'Contenu 4')
  ];
  post : Post[];
  constructor(private postservice: PostService) {
    this.post = this.postservice.posts;
   }

}
