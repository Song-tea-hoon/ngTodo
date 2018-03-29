import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing';
import { AdminComponent } from "./admin/admin.component";
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  declarations: [
    AdminComponent,
    HomeComponent,
    NewsComponent
  ]
})
export class AdminModule { }
