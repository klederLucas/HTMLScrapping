import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  constructor(private btSerial: BluetoothSerial,
              private alertCtrl: AlertController) {}

  ProcurarBT(){
    return this.btSerial.list();
  };

  connectBT(address){
    return this.btSerial.connect(address);
  }

  async presentAlert(messageData: any) {
    const alert = await this.alertCtrl.create(messageData);
    await alert.present();
  }

  testarImpressao(address) {
    const printData = 'Testando impressão \n\n\n\n Hello word 123 \n\n\n';

    let printer =  this.connectBT(address).subscribe(data => {
      this.btSerial.write(printData).then( dataz => {
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
}
