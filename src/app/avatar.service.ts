import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  player: string="hello.jpg";
  ai: string="hello2.png";
  winner: number=0;
  constructor() { }
  set1():void{
    this.player="fire.png"
    this.ai="water.png"
  }
  set2():void{
    this.player="hello.jpg";
    this.ai="hello2.png";
  }
  set3():void{
    this.player="sakib.jpg";
    this.ai="galib.jpg"
  }
}
