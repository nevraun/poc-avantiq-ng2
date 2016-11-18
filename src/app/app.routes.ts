import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LOGIN_ROUTES } from "./login/index";
import { HOME_ROUTES } from "./home/index";

const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    ...LOGIN_ROUTES,
    ...HOME_ROUTES
];

export const APP_ROUTING_PROVIDERS: any[] = [

];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);