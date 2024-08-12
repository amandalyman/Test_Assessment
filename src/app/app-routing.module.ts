import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { IntroComponent } from './components/intro/intro.component';
import { TidbitsComponent } from './components/tidbits/tidbits.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'intro',
  },
  {
    path: 'intro',
    pathMatch: 'full',
    component: IntroComponent,
  },
  {
    path: 'hobbies',
    component: HobbiesComponent,
  },
  {
    path: 'tidbits',
    component: TidbitsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
