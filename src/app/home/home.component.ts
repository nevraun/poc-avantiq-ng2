import { Component, OnInit } from '@angular/core';
import { AvantiqService } from "../shared/index";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    // private
    private _activities: any[];

    /**
     * Component constructor
     *
     * @param _avantiqService
     */
    constructor(private _avantiqService: AvantiqService) {
        this._activities = [];
    }

    ngOnInit() {
        // call API to get activities
        this._avantiqService.activities().subscribe(activities => console.log(activities), error => console.error(error));
    }
}
