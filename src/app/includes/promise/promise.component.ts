import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
 
  promiseVal:any;
  constructor() { }
  
  hp(){
     return true;
  }

  dell(){
    return false ;
  }

  dellProduct={
    brand:'dell',
    hardDisk:'2 TB',
    color:'red' 
  }

  hpProduct={
    brand:'Hp',
    hardDisk:'1 TB',
    color:'Blue' 
  }

  notAvil={
    brand:'Not Available',
    status:'Failed'
  }


  ngOnInit(): void {

    let buyLaptop=new Promise((resolve,reject)=>{
      if(this.dell() && this.hp()){
        //resolve("Both Dell and Hp available");
        resolve(this.dellProduct+"  "+this.hpProduct);
      }
      else if(this.hp()){
        // resolve("Hp products");
        resolve(this.hpProduct);
      }else if(this.dell()){
       // resolve("dell products");
       resolve(this.hpProduct);
     }
      else{
        //reject("not Avilable");
        reject(this.notAvil);
      }   
    });


    buyLaptop.then((res)=>{
      console.log("then block executed:",res);
      //console.log(res);
      this.promiseVal=res;
    }).catch((err)=>{
      console.log("Catch Block Executed",err);
     // console.log(err);

      this.promiseVal=err;
    })

  }

} 
