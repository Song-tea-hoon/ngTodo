import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../admin.service';
import { NewsVo } from '../../../domain/news.vo';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {

  news: NewsVo;

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private adminService:AdminService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let news_id = +params['news_id'];
      this.adminService.findOneNews(news_id)
        .then((res: NewsVo)=>{
          this.news = res;
        });
    });
  }

  modifyNews(){
    this.adminService.modifyNews(this.news)
      .then(res => {
        if(res['result'] === 0){
          this.router.navigate(['../..'], {relativeTo: this.route});
        }
      })
  }

}
