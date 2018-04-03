import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminService {

  private SERVER: string;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.SERVER = `${environment.HOST}`;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
   }

   findNews(params: any):Promise<any>{
     return this.http.post(this.SERVER + '/api/newsList', params, {headers:this.headers}).toPromise();
   }
   
   findOneNews(params: any):Promise<any>{
     return this.http.get(this.SERVER + `/api/news?news_id=${params}`).toPromise();
   }

   addNews(params: any){
     return this.http.put(this.SERVER + '/api/news', params, {headers:this.headers}).toPromise();
   }
}
