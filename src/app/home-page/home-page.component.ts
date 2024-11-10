import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [DatePipe,CommonModule,RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  name: string = '';
  email: string = '';
  userName: string = '';
  array:any[]=[];
  currentDate:Date=new Date(); 
  weather:any;
  private api=inject(ServiceService);
  news:any;

  ngOnInit() {
    const localStorageData = localStorage.getItem('registrationData');
    const localStorageData2=localStorage.getItem('Category');
    if (localStorageData) {
      const userData = JSON.parse(localStorageData)[0]; 
      this.name = userData.name || '';
      this.email = userData.email || '';
      this.userName = userData.userName || '';
    }
    if(localStorageData2){
      const userData2=JSON.parse(localStorageData2);
      for (const item of userData2) {
        this.array.push(item);
        console.log("data is fetched from ls")
      }
    }
    this.api.getWeatherDetails().subscribe((res:any)=>{
      this.weather=res;
      console.log(this.weather);
    })

    this.api.getNewsDetails().subscribe((res:any)=>{
      this.news=res;
      console.log(this.news);
    })
  }
}
