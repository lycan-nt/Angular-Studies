import { AddPostService } from './../add-post.service';
import { PostPayload } from './../add-post/post-payload';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts!: Observable<Array<PostPayload>>;
  constructor(private postService: AddPostService) { }

  ngOnInit() {
    this.posts = this.postService.getAllPosts();
  }

}
