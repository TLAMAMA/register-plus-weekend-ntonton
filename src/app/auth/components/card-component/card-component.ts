import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent implements OnInit {

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


  constructor() { }

  ngOnInit(): void {
  }

}
