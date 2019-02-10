import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HousekeepingComponent } from './housekeeping/housekeeping.component';
import { OccupancyComponent } from './occupancy/occupancy.component';
import { HomeComponent } from './home/home.component';
import { PostsService } from './posts.service';

@NgModule({
  declarations: [
    AppComponent,
    HousekeepingComponent,
    OccupancyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
HttpClientModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
