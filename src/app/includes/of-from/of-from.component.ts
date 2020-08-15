import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {
  obsMgs;
  constructor(private service:DesignUtilityService) { }

  ngOnInit(): void {
    //of()
    const obs1=of('sk','saukat','alli')
    
    obs1.subscribe(res=>{
      //console.log(res);
      this.service.print(res,'elContainer');
    })
    
    const obs2=of(
      {a:'sk',b:'saukat',c:'alli'}
      )

    obs2.subscribe(res=>{
      //console.log(res);
    this.obsMgs=res;
    })

    //from=Array
    let arr=['UxTrenz','John','Alen']
    const obs3=from(arr)
    obs3.subscribe(res=>{
    //  console.log(res);
      this.service.print(res,'elContainer3');
    })

    //from-promise
    
    const promise=new Promise(resolve=>{
      setTimeout(() => {
        resolve('Promise Resolved')
      }, 5000);
    });
    //promise.then(console.log);
    const obs4=from(promise)
    obs4.subscribe(res=>{
      console.log("from Promise=>"+res);
      this.service.print(res,'elContainer4');
    })


   //from-string
   const obs5=from('Welcome to Rxjs')
    obs5.subscribe(res=>{
      console.log("from string=>"+res);
      this.service.print(res,'elContainer5');
    })

    
  }

}
