import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
let SharedModule = class SharedModule {
};
SharedModule = tslib_1.__decorate([
    NgModule({
        exports: [
            CommonModule,
            ReactiveFormsModule,
            IonicModule,
        ]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map