import { Component, OnInit } from '@angular/core';
import { NewsVo } from '../../../domain/news.vo';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {

  news = new NewsVo;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  addNews(){
    // snackbar 구현부
    this.adminService.addNews(this.news)
      .then(res => {
        console.log(res);
      })
  }
}
