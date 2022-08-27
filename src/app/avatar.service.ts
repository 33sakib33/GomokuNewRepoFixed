import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  player: string="hello.jpg";
  ai: string="hello2.png";
  constructor() { }
  set1():void{
    this.player="fire.png"
    this.ai="water.png"
  }
  set2():void{
    this.player="hello.jpg";
    this.ai="hello2.png";
  }
}
