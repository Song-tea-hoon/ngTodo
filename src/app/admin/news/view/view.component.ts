import { Component, OnInit } from '@angular/core';
import { NewsVo } from '../../../domain/news.vo';
import { AdminService } from '../../admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  news: NewsVo;

  constructor(private route :ActivatedRoute, private adminService: AdminService) { }

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

}
