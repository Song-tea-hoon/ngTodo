import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { JqueryComponent } from './jquery/jquery.component';

const routes: Routes = [
  {path:'', component: IndexComponent, children:[
    {path:'', component: HomeComponent},
    {path: 'jquery', component: JqueryComponent}
  ]},
  //참고 : 향후 관리자 생성모듈
  //{path:'admin', loadChildren:'app/admin/admin.module#AdminModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
