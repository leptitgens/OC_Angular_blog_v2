import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { postService } from './services/post.service';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PostListComponent } from './post-list/post-list.component';
import { PostViewComponent } from './post-view/post-view.component';
import { PostNewComponent } from './post-new/post-new.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'post/new', component: PostNewComponent },
  { path: '**', redirectTo: '/posts' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostViewComponent,
    PostNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [postService],
  bootstrap: [AppComponent]
})
export class AppModule { }
