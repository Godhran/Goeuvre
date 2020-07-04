import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobComponent } from './mob/mob.component';
import { CactuarComponent } from './cactuar/cactuar.component';
import { GudetamaComponent } from './gudetama/gudetama.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WoahComponent } from './woah/woah.component';


const routes: Routes = [
  {path:'', component:GalleryComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'woah', component:WoahComponent},
  {path:'cactuar', component:CactuarComponent},
  {path:'gudetama', component:GudetamaComponent},
  {path:'mobpsycho', component:MobComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
