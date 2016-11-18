import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { APP_ROUTING, APP_ROUTING_PROVIDERS } from "./app.routes";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ADAL_PROVIDERS, AVANTIQ_PROVIDERS } from "./shared/index";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        APP_ROUTING
    ],
    providers: [
        ...APP_ROUTING_PROVIDERS,
        ...ADAL_PROVIDERS,
        ...AVANTIQ_PROVIDERS
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
