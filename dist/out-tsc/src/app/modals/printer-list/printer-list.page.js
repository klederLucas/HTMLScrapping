import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { PrintService } from 'src/app/service/print/print.service';
let PrinterListPage = class PrinterListPage {
    constructor(modalCtrl, print, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.print = print;
        this.alertCtrl = alertCtrl;
        this.loadPrinters();
    }
    ngOnInit() {
    }
    loadPrinters() {
        this.print.ProcurarBT().then(datalist => {
            this.printers = datalist;
        });
    }
    selectPrinter(printer) {
        this.modalCtrl.dismiss(printer);
    }
    closeModal() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss();
        });
    }
};
PrinterListPage = tslib_1.__decorate([
    Component({
        selector: 'app-printer-list',
        templateUrl: './printer-list.page.html',
        styleUrls: ['./printer-list.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController,
        PrintService,
        AlertController])
], PrinterListPage);
export { PrinterListPage };
//# sourceMappingURL=printer-list.page.js.map