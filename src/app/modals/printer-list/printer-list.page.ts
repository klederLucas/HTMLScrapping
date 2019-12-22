import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { PrintService } from 'src/app/service/print/print.service';


@Component({
  selector: 'app-printer-list',
  templateUrl: './printer-list.page.html',
  styleUrls: ['./printer-list.page.scss'],
})
export class PrinterListPage implements OnInit {

  public printers: any;

  constructor(private modalCtrl: ModalController,
              private print: PrintService,
              private alertCtrl: AlertController) { 
    this.loadPrinters();
  }

  ngOnInit() {
  }

  loadPrinters() {
    this.print.ProcurarBT().then(datalist => {
      this.printers = datalist;
    });
  }

  selectPrinter(printer){
    this.modalCtrl.dismiss(printer);
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

}
