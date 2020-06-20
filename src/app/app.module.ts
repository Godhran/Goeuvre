import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobComponent } from './mob/mob.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CactuarComponent } from './cactuar/cactuar.component';
import { GudetamaComponent } from './gudetama/gudetama.component';

@NgModule({
  declarations: [
    AppComponent,
    MobComponent,
    NavbarComponent,
    FooterComponent,
    CactuarComponent,
    GudetamaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
