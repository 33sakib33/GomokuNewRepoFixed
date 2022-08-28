import { Component, OnInit } from '@angular/core';
import { AvatarService } from '../avatar.service';

@Component({
  selector: 'app-avatar-options-menu',
  templateUrl: './avatar-options-menu.component.html',
  styleUrls: ['./avatar-options-menu.component.css']
})
export class AvatarOptionsMenuComponent implements OnInit {

  constructor(private avService: AvatarService) { }

  ngOnInit(): void {
  }
  setFireandWater():void{
    this.avService.set1();
  }
  setManchesterDerby():void{
    this.avService.set2();
  }
  setGS():void{
    this.avService.set3();
  }
}
