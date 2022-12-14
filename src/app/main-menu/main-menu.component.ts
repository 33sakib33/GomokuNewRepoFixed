import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToGame():void{
    this.router.navigate(['game']);
  }
  goToCredit():void{
    this.router.navigate(['credits']);
  }
  goToAvatarOptions():void{
    this.router.navigate(['avatarSelect']);
  }
}
