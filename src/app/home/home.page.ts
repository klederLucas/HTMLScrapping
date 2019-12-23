import { Platform, AlertController } from '@ionic/angular';
import { Component } from '@angular/core';
import { PrintService } from '../service/print/print.service';
import { ModalController } from '@ionic/angular';
import { PrinterListPage } from '../modals/printer-list/printer-list.page';
import { Chooser } from '@ionic-native/chooser/ngx';
import { File } from '@ionic-native/file/ngx';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

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
              private alertCtrl: AlertController,
              private chooser: Chooser,
              private file: File) {

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

  testPrinter() {
    const id = this.selectedPrinter.id;
    // tslint:disable-next-line: triple-equals
    if ((id == null) || (id == '') || (id == undefined)) {

    } else {
      this.print.testarImpressao(id);
    }
  }

  selectFile() {
    (async () => {
      const fileChoosed = await this.chooser.getFile();
      this.file.checkDir(this.file.dataDirectory, fileChoosed.uri)
        .then(_ => console.log('diretorio existente'))
        .catch(error => console.log('Erro diretorio' + error));
     })();
  }
}


