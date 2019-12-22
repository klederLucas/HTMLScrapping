import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';


@NgModule({
  exports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    // BluetoothSerial,
  ]
})

export class SharedModule { }
