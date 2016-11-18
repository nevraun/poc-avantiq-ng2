import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdalService } from "../shared/index";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    // private variable to store title text
    private _title:string;
    // private variable to store login text
    private _login:string;
    // private variable to store login in progress flag
    private _isLoginInProgress: boolean;
    // private property to store user info subscription
    private _userInfoSubscription: Subscription;

    /**
     * Component constructor
     */
    constructor(private _router: Router, private _adalService:AdalService) {
        this._title = 'Connect to Azure';
        this._login = 'Login';
        this._isLoginInProgress = false;
    }

    /**
     * Returns _title private property
     *
     * @returns {string}
     */
    get title(): string {
        return this._title;
    }

    /**
     * Returns _login private property
     *
     * @returns {string}
     */
    get login(): string {
        return this._login;
    }

    get isLoginInProgress(): boolean {
        return this._isLoginInProgress;
    }

    /**
     * OnInit treatment
     */
    ngOnInit() {
        console.log('ON INIT LOGIN', this._router.url);
        this._userInfoSubscription = this._adalService.userInfo$.subscribe(_ => this._redirectIfAuthenticated());

        this._adalService.handleWindowCallback();

        // check if we are not on callback hash
        if (!this._adalService.isCallback()) {
            console.log('NOT IN CALLBACK');
            this._redirectIfAuthenticated();
        }
    }

    /**
     * OnDestroy treatment
     */
    ngOnDestroy() {
        if (this._userInfoSubscription) {
            this._userInfoSubscription.unsubscribe();
        }
    }

    /**
     * Function to connect to AAD
     */
    connect() {
        this._adalService.login();
        this._isLoginInProgress = this._adalService.loginInProgress();
    }

    private _redirectIfAuthenticated() {
        if (this._adalService.userInfo.isAuthenticated) {
            console.log('USER AUTHENTICATED - REDIRECT TO HOME');
            this._router.navigate(['/home'], { replaceUrl: true });
        }
    }
}
