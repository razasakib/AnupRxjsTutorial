import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromiseComponent } from './includes/promise/promise.component';
import { ObservableComponent } from './includes/observable/observable.component';
import { ListComponent } from './includes/observable/list/list.component';
import { FromEventComponent } from './includes/observable/from-event/from-event.component';
import { IntervalComponent } from './includes/interval/interval.component';


const routes: Routes = [
  {path:'promise',component:PromiseComponent},
  {path:'observable',component:ObservableComponent,children:[
    {path:'',component:ListComponent},
    {path:'fromEvent',component:FromEventComponent},
    {path:'interval',component:IntervalComponent},

  ]},
  {path:'**',redirectTo:'promise',},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
