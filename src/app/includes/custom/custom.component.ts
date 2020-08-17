import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  constructor(private service:DesignUtilityService) { }

  ngOnInit(): void {
  
    const cusObs1=Observable.create(observable=>{
      setTimeout(() => {
      //  observable.next("Data Emit1"); 
        observable.next("Angular"); 

      }, 1000);

      setTimeout(() => {
       // observable.next("Data Emit2"); 
        observable.next("Typescript"); 

      }, 2000);
      
      
      
      setTimeout(() => {
        //   observable.next("Data Emit2"); 
        observable.next("Html & CSS"); 
        observable.complete();
     
      }, 3000);

      setTimeout(() => {
        observable.next("Data Emit3"); 
        observable.error(new Error('Limit Exceed'))
      }, 6000);


    })

    cusObs1.subscribe(res=>{
      console.log(res);
      this.service.print(res,"elContainer1")
    })

  }

}
