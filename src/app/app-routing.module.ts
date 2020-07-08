import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobComponent } from './mob/mob.component';
import { CactuarComponent } from './cactuar/cactuar.component';
import { GudetamaComponent } from './gudetama/gudetama.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WoahComponent } from './woah/woah.component';
import { WandererComponent } from './wanderer/wanderer.component';
import { ViennaComponent } from './vienna/vienna.component';
import { SolvayComponent } from './solvay/solvay.component';
import { TallgeeseComponent } from './tallgeese/tallgeese.component';


const routes: Routes = [
  {path:'', component:GalleryComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'vienna', component:ViennaComponent},
  {path:'solvay', component:SolvayComponent},
  {path:'tallgeese', component:TallgeeseComponent},
  {path:'wanderer', component:WandererComponent},
  {path:'woah', component:WoahComponent},
  {path:'cactuar', component:CactuarComponent},
  {path:'gudetama', component:GudetamaComponent},
  {path:'mobpsycho', component:MobComponent},
  {path:'**', component:GalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
