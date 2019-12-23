import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { PrinterListPage } from '../modals/printer-list/printer-list.page';
import { SharedModule } from '../shared/shared.module';
let HomePageModule = class HomePageModule {
};
HomePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            SharedModule,
            RouterModule.forChild([
                {
                    path: '',
                    component: HomePage
                }
            ])
        ],
        declarations: [HomePage, PrinterListPage],
        entryComponents: [PrinterListPage]
    })
], HomePageModule);
export { HomePageModule };
//# sourceMappingURL=home.module.js.map