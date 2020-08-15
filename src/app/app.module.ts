import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './includes/promise/promise.component';
import { ObservableComponent } from './includes/observable/observable.component';
import { ListComponent } from './includes/observable/list/list.component';
import { FromEventComponent } from './includes/observable/from-event/from-event.component';
import { DesignUtilityService } from './appServices/design-utility.service';
import { IntervalComponent } from './includes/interval/interval.component';
import { OfFromComponent } from './includes/of-from/of-from.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DesignUtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
