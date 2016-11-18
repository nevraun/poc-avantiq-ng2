import { HomeComponent } from "./home.component";
import { AdalGuard } from "../shared/index";

export const HOME_ROUTES = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AdalGuard]
    }
];