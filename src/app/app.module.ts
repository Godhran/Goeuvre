import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobComponent } from './mob/mob.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CactuarComponent } from './cactuar/cactuar.component';
import { GudetamaComponent } from './gudetama/gudetama.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WoahComponent } from './woah/woah.component';
import { WandererComponent } from './wanderer/wanderer.component';
import { ViennaComponent } from './vienna/vienna.component';
import { LoadingAnimationComponent } from './loading-animation/loading-animation.component';
import { SolvayComponent } from './solvay/solvay.component';
import { TallgeeseComponent } from './tallgeese/tallgeese.component';

@NgModule({
  declarations: [
    AppComponent,
    MobComponent,
    NavbarComponent,
    FooterComponent,
    CactuarComponent,
    GudetamaComponent,
    GalleryComponent,
    WoahComponent,
    WandererComponent,
    ViennaComponent,
    LoadingAnimationComponent,
    SolvayComponent,
    TallgeeseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
