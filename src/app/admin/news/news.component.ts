import { Component, OnInit } from '@angular/core';
import { PageVo } from '../../domain/page.vo';
import { NewsVo } from '../../domain/news.vo';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  page:PageVo = new PageVo(0,5);
  newsList:Array<NewsVo>;

  constructor(private adminService: AdminService,
  private router: Router) { }

  ngOnInit() {
    this.getNewsList();
  }

  getNewsList(){
    console.log('getNewsList');
    let params = {
      start_index: this.page.pageIndex * this.page.pageSize,
      page_size: this.page.pageSize
    }

    this.adminService.findNews(params)
      .then(res=>{
        console.log(res);
        this.newsList = res.data;
        this.page.totalCount = res.total;
      })
  }

  pageChanged(event: any){
    this.page.pageIndex = event.pageIndex;
    this.page.pageSize = event.pageSize;
    this.getNewsList();
  }

  gotoView(news: NewsVo){
    this.router.navigateByUrl(`/admin/news/view/${news.news_id}`);
  }

  gotoWrite(){
    this.router.navigateByUrl('/admin/news/write');
  }
}
