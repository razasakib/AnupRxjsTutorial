import { Component, OnInit } from '@angular/core';
import {interval, Subscription, from, } from 'rxjs';
import {map} from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

 sub1:Subscription;
 msg1;

 sub2:Subscription;
 msg2;
  constructor(private service:DesignUtilityService) { }

  ngOnInit(): void {

    //ex1.
    const broadCastVideos=interval(1000);

    this.sub1=broadCastVideos.pipe(
     map(data=>'Video'+data)
    ).
    subscribe(res=>{
     // console.log(res);
      this.msg1=res;
    })

    setTimeout(() => {
       this.sub1.unsubscribe();
    }, 10000);

    //ex2.
    const broadCastVideos2=interval(1000);

    this.sub2=broadCastVideos2.pipe(
     map(data=>'data*3=>'+data*3)
    ).
    subscribe(res=>{
     // console.log(res);
      this.msg2=res;
    })

    setTimeout(() => {
       this.sub2.unsubscribe();
    }, 10000);

    //ex3.
    const member=from([
      {id:1,name:'Saukat',age:25},
      {id:2,name:'Anup',age:29},
      {id:3,name:'Tanmaya',age:27},
      {id:4,name:'Ajit',age:24}
    ])

    member.pipe(
      map(data=>data.name)
    ).
    subscribe(res=>{
      console.log(res);
      this.service.print(res,'elContainer');
    })

  }

}
