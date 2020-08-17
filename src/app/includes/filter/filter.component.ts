import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { toArray,filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  member=[
    {id:1,name:'Saukat',gender:'male'},
    {id:2,name:'Arpita',gender:'female'},
    {id:3,name:'Tanmaya',gender:'male'},
    {id:4,name:'mahee',gender:'female'},
    {id:3,name:'taruni',gender:'female'},
    {id:4,name:'arjit',gender:'male'}
  ]

  data1;

  data2;

  data3

  constructor() { }
  ngOnInit(): void {
    const source=from(this.member);

    source.pipe(
      filter(member=>member.name.length>=6),
      toArray()
    ).subscribe(res=>{
      console.log(res)
      this.data1=res
    })

    //filter by gender
    source.pipe(
      filter(member=>member.gender=='male'),
      toArray()
    ).subscribe(res=>{
      console.log(res)
      this.data2=res
    })

    //filter by nth
    //filter by gender
    source.pipe(
      filter(member=>member.id<=6),
      toArray()
    ).subscribe(res=>{
      console.log(res)
      this.data3=res
    })



  }

}
