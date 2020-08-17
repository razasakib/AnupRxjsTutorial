import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  
  myColor:string='';

  constructor(private service:DesignUtilityService) { }

  ngOnInit(): void {
    
    const arr=['saukat','arun','soma','mahee','tanmaya'];
    let sub1:Subscription;
    const source=interval(1000);
    
    sub1=source.pipe(
      tap(res=>{
        
        console.log("before tab=>"+res)
        if(res==4){
          sub1.unsubscribe();

         }
      }),
     map(res=>arr[res]),
     tap(res=>console.log("After tab=>"+res))
    ).
    subscribe(res=>{
      console.log(res);
      this.service.print(res,'elContainer')
      //this.msg2=res;
    })

    //02
    const color=['Red','Green','Blue','Orange','Yellow','Purple'];
    let sub2:Subscription;
    
    
    sub2=source.pipe(
      tap(res=>{
        this.myColor=color[res]
        console.log("tab=>"+res)
        if(res==6){
          sub2.unsubscribe();
         }
      }),
     map(res=>color[res]),
    ).
    subscribe(res=>{
      console.log(res);
      this.service.print(res,'elContainer2')
      //this.msg2=res;
    })
  }

}
