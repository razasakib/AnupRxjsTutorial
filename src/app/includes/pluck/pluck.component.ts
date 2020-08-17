import { Component, OnInit } from '@angular/core';
import { from, pipe } from 'rxjs';
import { map, toArray, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {
data;
data2;
  constructor() { }
  users=[
    {
      name:'saukat',
      skills:'Angular',
      //nested
      job:{
        title:'fronted developer',
        exp:'Fresher'
      }
    },
   {
    name:'ajit',
  skills:'Java',
  job:{
    title:'Backend developer',
    exp:'1 years'
  }
   },
   {
    name:'Animesh',
    skills:'Javascript',
    job:{
      title:'JavaScript developer',
      exp:'2 years'
    }
   },
   {
    name:'Tanmaya',
    skills:'Typescript',
    job:{
    title:'Typescript developer',
    exp:'3 years'
  }
   }
  ]

  ngOnInit(): void {

    //ex1.
    from(this.users).pipe(
    //  map(data=>data.name),
      pluck('name'), 
      toArray()
    ).subscribe(res=>{
      console.log(res);
      this.data=res
    })

    //ex2
    from(this.users).pipe(
      //  map(data=>data.name),
        pluck('job','title'), 
        toArray()
      ).subscribe(res=>{
        console.log(res);
        this.data2=res
      })
  }

}
