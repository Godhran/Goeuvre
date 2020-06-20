import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobComponent } from './mob/mob.component';
import { CactuarComponent } from './cactuar/cactuar.component';
import { GudetamaComponent } from './gudetama/gudetama.component';


const routes: Routes = [
  {path:'', component:MobComponent},
  {path:'cactuar', component:CactuarComponent},
  {path:'gudetama', component:GudetamaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
