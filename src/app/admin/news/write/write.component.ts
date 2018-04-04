import { Component, OnInit } from '@angular/core';
import { NewsVo } from '../../../domain/news.vo';
import { AdminService } from '../../admin.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {

  news = new NewsVo;
  fileList : FileList;

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

  fileChange(event: any){
    this.fileList = event.target.files;
    console.log(this.fileList);
    let reader = new FileReader();
    reader.readAsDataURL((this.fileList[0]));
    reader.onload = ()=>{
      this.imageUpload();
    }
  }

  imageUpload(){
    let formData: FormData = new FormData();

    if(this.fileList && this.fileList.length > 0){
      let file: File = this.fileList[0];
      formData.append('file', file, file.name);
    }
    console.log(formData);
    this.adminService.imageUpload(formData)
      .then(res => {
        if(res['result'] === 0){
          console.log(res['value']);
          if(this.news.content){
            this.news.content += `<img src="http://www.javabrain.kr${res['value']} style="max-width: 100%;"">`;            
          }else{
            this.news.content = `<img src="http://www.javabrain.kr${res['value']}" style="max-width: 100%;">`;
          }
        }
      })
  }
}
