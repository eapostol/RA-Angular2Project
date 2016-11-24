//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { platformBrowserDynamic } from
    '../node_modules/@angular/platform-browser-dynamic/bundles';

import { AppModule } from './app.module';

import { enableProdMode } from '@angular/core';

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
