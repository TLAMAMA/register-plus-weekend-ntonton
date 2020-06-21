import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-component',
  templateUrl: './comment-component.component.html',
  styleUrls: ['./comment-component.component.scss']
})
export class CommentComponentComponent implements OnInit {

  postButton=false;

  addPost(){
    this.postButton= !this.postButton;
   /* if(!this.addPost){
      this.postButton = true;
    }
    else{
      this.postButton = false;
    }*/
  }

  closeArea(){
    this.postButton=this.postButton;
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
