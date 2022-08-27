import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule,MatDialogConfig } from '@angular/material/dialog';
import { GameOverDialogComponent } from './game-over-dialog/game-over-dialog.component';
import { RouterModule } from '@angular/router';
// import { MatDialogRef } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CreditsComponent } from './credits/credits.component';
import { AvatarOptionsMenuComponent } from './avatar-options-menu/avatar-options-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameOverDialogComponent,
    MainMenuComponent,
    CreditsComponent,
    AvatarOptionsMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[GameOverDialogComponent]
})
export class AppModule { }
