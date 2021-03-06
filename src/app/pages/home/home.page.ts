import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    header: any;
    obv: any;

    constructor(private serviceDatabase: DatabaseService) {
        this.header = {title: 'Home', ismenu: true, showcart: true};
        this.obv = {nov: this.serviceDatabase.loadNovedadesTable()};
    }

    ngOnInit() {
    }
}
