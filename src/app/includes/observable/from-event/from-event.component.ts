import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit,AfterViewInit {

 @ViewChild('addBtn') addBtn:ElementRef;
  constructor(private _service:DesignUtilityService) { }
  
  ngOnInit(): void {
    
  }
    ngAfterViewInit(): void {
     let count=1;
      fromEvent(this.addBtn.nativeElement,'click').subscribe(res=>{
        let valCount='Video'+count++;
        console.log(valCount);
         this._service.print(valCount,'elContainer1')
         this._service.print(valCount,'elContainer2')
/*
         this.print(valCount,'elContainer1');
         this.print(valCount,'elContainer2');*/
      })
    }
  


}
