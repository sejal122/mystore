import { Component } from '@angular/core';
import { PostService } from './post.service';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { NetflixComponent } from './netflix/netflix.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any;
  constructor(private postData:PostService){}
  ngOnInit(){
    
   this.postData.getPost().subscribe((result)=>{
     console.warn('result',result)
     this.data=result;
   })
  }
  nfilms: NetflixComponent[]=[];
  
  slides = [
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'},
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}
  ];
  title = 'mystore';
}
