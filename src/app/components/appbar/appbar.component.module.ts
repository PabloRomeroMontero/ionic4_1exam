import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';


import {IonicModule} from '@ionic/angular';
import {AppbarComponent} from './appbar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [AppbarComponent],
    exports: [AppbarComponent]
})
export class AppbarComponentModule {
}
