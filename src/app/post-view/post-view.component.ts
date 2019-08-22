import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { postService } from '../services/post.service';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit, OnDestroy {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;
  @Input() index: number;

  posts: Post[];
  postSubscription: Subscription;

  constructor(private postService: postService) { }

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostSubject();
  }

  getColor(){
    if (this.postLoveIts>0){
      return 'green';
    } else if (this.postLoveIts<0) {
      return 'red';
    } else {
      return 'black';
    }
  }

  addLove(){
    this.postService.onAddLove(this.index);
  }

  removeLove(){
    this.postService.onRemoveLove(this.index);
  }

  onDeletePost() {
    console.log(this.index);
    this.postService.removePost(this.index);
  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }

}
