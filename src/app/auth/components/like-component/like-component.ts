import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-component',
  templateUrl: './like-component.component.html',
  styleUrls: ['./like-component.component.scss']
})
export class LikeComponentComponent implements OnInit {

  constructor() { }
  //addLikes:any;
  //minusLikes:any;
  numberOfLikes: number=110;
  BUTTON=false;
  
  likeButtonClicked(){
    if(!this.BUTTON){
      this.BUTTON =true;
      this.numberOfLikes++;
    }else{
      this.BUTTON =false;
      this.numberOfLikes--;
    }
  }

  likeButtonUnclicked(){
    /*this.BUTTON = this.minusLikes;
    this.minusLikes=this.numberOfLikes--;
    this.BUTTON = this.numberOfLikes--;*/
    this.numberOfLikes--;
  }

  ngOnInit(): void {
  }

}
