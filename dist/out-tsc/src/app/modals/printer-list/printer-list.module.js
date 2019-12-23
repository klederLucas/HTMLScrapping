import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PrinterListPage } from './printer-list.page';
const routes = [
    {
        path: '',
        component: PrinterListPage
    }
];
let PrinterListPageModule = class PrinterListPageModule {
};
PrinterListPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [PrinterListPage]
    })
], PrinterListPageModule);
export { PrinterListPageModule };
//# sourceMappingURL=printer-list.module.js.map