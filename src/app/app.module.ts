import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

//install angular-bootstrap-md
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
//import { LikeComponentComponent } from './components/like-component/like-component.component';
//import { CardComponentComponent } from './components/card-component/card-component.component';
//import { CommentComponentComponent } from './components/comment-component/comment-component.component';
import { LikeComponentComponent} from './auth/components/like-component/like-component';
import { CardComponentComponent} from './auth/components/card-component/card-component';
import { CommentComponentComponent} from './auth/components/comment-component/comment-component';



@NgModule({
  declarations: [
    AppComponent,
    LikeComponentComponent,
    CardComponentComponent,
    CommentComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgbModule,
    AuthModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
