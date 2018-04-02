import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatExpansionModule, MatCardModule, MatPaginatorModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AdminRoutingModule } from './admin-routing';
import { AdminComponent } from "./admin/admin.component";
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AdminService } from './admin.service';
import { ViewComponent } from './news/view/view.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatPaginatorModule
  ],
  declarations: [
    AdminComponent,
    HomeComponent,
    NewsComponent,
    ViewComponent
  ],
  providers: [AdminService]
})
export class AdminModule { }
