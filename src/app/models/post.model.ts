import * as firebase from 'firebase';

export class Post {
    public title: string;
    public content: string;
    public loveIts: number;
    public created_at: any;
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
        this.loveIts = 0;
        this.created_at = firebase.database.ServerValue.TIMESTAMP;        
    }
  }