import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, 
  MatExpansionModule, 
  MatCardModule, 
  MatPaginatorModule, 
  MatIconModule, 
  MatButtonModule, 
  MatSnackBarModule, 
  MatFormFieldModule,
  MatInputModule} from '@angular/material';
import { CKEditorModule } from 'ng2-ckeditor';

import { AdminRoutingModule } from './admin-routing';
import { AdminService } from './admin.service';
import { AdminComponent } from "./admin/admin.component";
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ViewComponent } from './news/view/view.component';
import { WriteComponent } from './news/write/write.component';
import { ModifyComponent } from './news/modify/modify.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    CKEditorModule
  ],
  declarations: [
    AdminComponent,
    HomeComponent,
    NewsComponent,
    ViewComponent,
    WriteComponent,
    ModifyComponent
  ],
  providers: [AdminService, Location]
})
export class AdminModule { }
