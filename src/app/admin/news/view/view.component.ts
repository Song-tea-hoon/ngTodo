import { Component, OnInit } from '@angular/core';
import { NewsVo } from '../../../domain/news.vo';
import { AdminService } from '../../admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  news: NewsVo;
  
  constructor(
    private route :ActivatedRoute, 
    private router:Router,
    private adminService: AdminService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let news_id = +params['news_id'];
      this.adminService.findOneNews(news_id)
        .then((res:NewsVo)=>{
          //console.log(res);
          this.news = res;
        })
    });
  }

  gotoModify(){
    let path = this.location.path();
    console.log(path);
    this.router.navigateByUrl(path.replace('view', 'modify'));
  }
}
