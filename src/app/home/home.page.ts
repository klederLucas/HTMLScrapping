import { Platform, AlertController } from '@ionic/angular';
import { Component } from '@angular/core';
import { PrintService } from '../service/print/print.service';
import { ModalController } from '@ionic/angular';
import { PrinterListPage } from '../modals/printer-list/printer-list.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  selectedPrinter: any = [];

  constructor(private platform: Platform,
              private print: PrintService,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController) {

  }

  async presentAlert(messageData: any) {
    const alert = await this.alertCtrl.create(messageData);
    await alert.present();
  }


  async openModal() {
    const modal = await this.modalCtrl.create({
      component: PrinterListPage
    });

    modal.onDidDismiss().then(data => {
      this.selectedPrinter = data.data;
    });

    return await modal.present();
  }

  testConnectPrinter() {
    const id = this.selectedPrinter.id;

    // tslint:disable-next-line: triple-equals
    if ((id == null) || (id == '') || (id == undefined)) {

    } else {
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
    // tslint:disable-next-line: triple-equals
    if ((id == null) || (id == '') || (id == undefined)) {

    } else {
      this.print.testarImpressao(id);
    }
  }
}
