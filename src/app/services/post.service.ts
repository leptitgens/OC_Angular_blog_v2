import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

export class postService{

  private posts: Post[] = [];  
  postSubject = new Subject<Post[]>();

  constructor() {
    this.loadOnDatabase();
  }

  emitPostSubject(){
      this.postSubject.next(this.posts.slice());
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.saveOnDataBase();
    this.emitPostSubject();
  }

  removePost(i: number) {
    this.posts.splice(i, 1);
    this.saveOnDataBase();
    this.emitPostSubject();
  }

  onAddLove(i: number) {
      this.posts[i].loveIts++;
      this.saveOnDataBase();
      this.emitPostSubject();
  }

  onRemoveLove(i: number) {
      this.posts[i].loveIts--;
      this.saveOnDataBase();
      this.emitPostSubject();
  }

  saveOnDataBase(){
    firebase.database().ref('/posts').set(this.posts);
  }

  loadOnDatabase() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPostSubject();
        }
      );
  }
}