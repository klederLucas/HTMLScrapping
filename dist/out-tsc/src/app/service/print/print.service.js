import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
let PrintService = class PrintService {
    constructor(btSerial, alertCtrl) {
        this.btSerial = btSerial;
        this.alertCtrl = alertCtrl;
    }
    ProcurarBT() {
        return this.btSerial.list();
    }
    ;
    connectBT(address) {
        return this.btSerial.connect(address);
    }
    presentAlert(messageData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create(messageData);
            yield alert.present();
        });
    }
    testarImpressao(address) {
        const printData = 'Testando impressão \n\n\n\n Hello word 123 \n\n\n';
        let printer = this.connectBT(address).subscribe(data => {
            this.btSerial.write(printData).then(dataz => {
                console.log('Impressão realizada!', dataz);
                this.presentAlert({
                    header: 'Atenção',
                    message: 'Impressão realizada com sucesso!',
                    buttons: ['OK']
                });
                printer.unsubscribe();
            }, errx => {
                console.log('Erro: ', errx);
                this.presentAlert({
                    header: 'Atenção',
                    message: 'Erro na impressao!\n' + errx,
                    buttons: ['OK']
                });
            });
        }, err => {
            console.log('Erro de conexão', err);
            this.presentAlert({
                header: 'Atenção',
                message: 'Erro de conexão!\n' + err,
                buttons: ['OK']
            });
        });
    }
};
PrintService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [BluetoothSerial,
        AlertController])
], PrintService);
export { PrintService };
//# sourceMappingURL=print.service.js.map