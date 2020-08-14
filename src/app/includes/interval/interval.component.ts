import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
  obsMgs;
  videoSubscribe:Subscription;
  constructor(private service:DesignUtilityService) { }

  ngOnInit(): void {
 //   const broadCastVideos=interval(1000);
 //timer(delay,interval)
 const broadCastVideos=timer(5000,1000);


    this.videoSubscribe=broadCastVideos.subscribe(res=>{
      console.log(res);
      this.obsMgs="Video"+res;
      this.service.print(this.obsMgs,"elContainer1");
      this.service.print(this.obsMgs,"elContainer2");
      this.service.print(this.obsMgs,"elContainer3");
      //stop the interval
        if(res>=5){
          this.videoSubscribe.unsubscribe()
        }


    })
  }

}
