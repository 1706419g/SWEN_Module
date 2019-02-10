import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HousekeepingComponent } from './housekeeping/housekeeping.component';
import { OccupancyComponent } from './occupancy/occupancy.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [

{ path: 'housekeeping', component: HousekeepingComponent},
{ path: 'occupancy', component: OccupancyComponent},
{ path: 'home', component: HomeComponent},

{ path: '', component:HomeComponent, pathMatch:'full'}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);