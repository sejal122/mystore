import { NgModule } from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { RouterModule, Routes } from '@angular/router';
import { AmazonprimeComponent } from './amazonprime/amazonprime.component';
import { BodyComponent } from './body/body.component';
import { NetflixComponent } from './netflix/netflix.component';

const routes: Routes = [
  { path: 'netflix', component: NetflixComponent },
  { path: 'body', component: BodyComponent },
  { path: 'amazonprime', component: AmazonprimeComponent },
  { path: '',   redirectTo: '/body', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
