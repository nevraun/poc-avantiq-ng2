import { Component, OnInit } from '@angular/core';
import { environment } from "../environments/environment";
import { AdalService } from "./shared/index";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    // private variable to store title text
    private _title: string;
    // private variable to store sub-title text
    private _subTitle: string;

    /**
     * Component constructor
     */
    constructor(private _adalService:AdalService) {
        this._title = 'POC NG2 AvantIQ';
        this._subTitle = 'Azure Active Directory Connection';
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
     * Returns _subTitle private property
     *
     * @returns {string}
     */
    get subTitle(): string {
        return this._subTitle;
    }

    /**
     * OnInit treatment
     */
    ngOnInit(): void {
        console.log('ON INIT APP');
        this._adalService.init(environment.adalConfig);
    }
}
