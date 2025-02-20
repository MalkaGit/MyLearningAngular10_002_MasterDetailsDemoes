import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {ItemV001ManagementComponent} from './pages/item-v001-management/item-v001-management.component';


const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
  	{ path: 'home', component: HomeComponent },
  	{ path: 'ItemsV001', component: ItemV001ManagementComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
