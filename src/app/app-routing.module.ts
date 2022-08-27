import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvatarOptionsMenuComponent } from './avatar-options-menu/avatar-options-menu.component';
import { CreditsComponent } from './credits/credits.component';
import { GameComponent } from './game/game.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

const routes: Routes = [{path:'',component:MainMenuComponent},
  {path:'game',component:GameComponent},
  {path:'credits',component:CreditsComponent},
  {path: 'avatarSelect',component:AvatarOptionsMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
