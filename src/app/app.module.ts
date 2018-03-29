import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { MatMenuModule, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { JqueryComponent } from './jquery/jquery.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './user.service';
import { AngularComponent } from './angular/angular.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { MydatePipe } from './mydate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    JqueryComponent,
    AngularComponent,
    HighlightDirective,
    MydatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
