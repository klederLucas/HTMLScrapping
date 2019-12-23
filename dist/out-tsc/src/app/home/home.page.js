import * as tslib_1 from "tslib";
import { Platform, AlertController } from '@ionic/angular';
import { Component } from '@angular/core';
import { PrintService } from '../service/print/print.service';
import { ModalController } from '@ionic/angular';
import { PrinterListPage } from '../modals/printer-list/printer-list.page';
let HomePage = class HomePage {
    constructor(platform, print, modalCtrl, alertCtrl) {
        this.platform = platform;
        this.print = print;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.selectedPrinter = [];
    }
    presentAlert(messageData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create(messageData);
            yield alert.present();
        });
    }
    openModal() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: PrinterListPage
            });
            //this.selectedPrinter = await modal.onDidDismiss();
            return yield modal.present();
        });
    }
    testConnectPrinter() {
        const id = this.selectedPrinter.id;
        // tslint:disable-next-line: triple-equals
        if ((id == null) || (id == '') || (id == undefined)) {
        }
        else {
            this.print.connectBT(id).subscribe(data => {
                console.log('Conexão realizada', data);
                this.presentAlert({
                    header: 'Sucesso!',
                    message: 'Conectado a impressora!',
                    buttons: ['OK']
                });
            }, err => {
                console.log('Erro de conexão com a impressora!', err);
                this.presentAlert({
                    header: 'Erro!',
                    message: 'Erro de conexão com a impressora! \n' + err,
                    buttons: ['OK']
                });
            });
        }
    }
    testPrinter() {
        const id = this.selectedPrinter.id;
        if ((id == null) || (id == '') || (id == undefined)) {
        }
        else {
            this.print.testarImpressao(id);
        }
    }
};
HomePage = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Platform,
        PrintService,
        ModalController,
        AlertController])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map