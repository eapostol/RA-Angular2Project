import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent }  from './home.component';
import { ArrivalComponent }    from './arrival.component';
import { EncountersComponent }  from './encounters.component';
import { ReportComponent }  from './report.component';

import { ColonistsService } from './colonists.service';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'arrival',
                component: ArrivalComponent
            },
            {
                path: 'encounters',
                component: EncountersComponent
            },
            {
                path: 'report',
                component: ReportComponent
            }

        ])
    ],
    exports: [
        RouterModule
    ],
    providers: [
        ColonistsService,
    ]
})
export class AppRoutingModule {}