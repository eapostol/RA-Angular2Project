import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { ArrivalComponent } from './arrival.component';
import { EncountersComponent } from './encounters.component';
import { ReportComponent } from './report.component';
import { JobService } from './job.service';


@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      JsonpModule,
      AppRoutingModule,
  ],
  declarations: [
      AppComponent,
      HomeComponent,
      ArrivalComponent,
      EncountersComponent,
      ReportComponent,
  ],
  bootstrap: [ AppComponent ],
    providers: [ JobService ]
})
export class AppModule { }
