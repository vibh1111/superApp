import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private http=inject(HttpClient);
  private api='https://api.tomorrow.io/v4/weather/forecast?location=20.5937,78.9629&apikey=Q25HdLANujrl7IsGvzIPlH5sAVXFNQem';
  private newsApi='https://api.worldnewsapi.com/search-news?text=cricket&language=en&api-key=9d68b0536add4b649478c2bc0a20aacd';
  constructor() { }
  getWeatherDetails():Observable<any>{
    return this.http.get(this.api)
  }
  getNewsDetails():Observable<any>{
    return this.http.get(this.newsApi)
  }
}
