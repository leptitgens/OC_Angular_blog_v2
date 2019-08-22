import { Component, OnInit, OnDestroy } from '@angular/core';
import { postService } from './services/post.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyBdSkG6ISpV6YP0oiz27nc1j6xiW55B__Q",
      authDomain: "oc-angular-21cc1.firebaseapp.com",
      databaseURL: "https://oc-angular-21cc1.firebaseio.com",
      projectId: "oc-angular-21cc1",
      storageBucket: "",
      messagingSenderId: "131365830931",
      appId: "1:131365830931:web:c6217819d66f7ce0"
    };
    firebase.initializeApp(firebaseConfig);
  }
  
  ngOnInit(){
    
  }

  ngOnDestroy(){

  }

}
