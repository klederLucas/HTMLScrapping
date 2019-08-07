import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { Component } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewerOptions, DocumentViewer } from '@ionic-native/document-viewer/ngx';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private platform: Platform,
              private file: File,
              private fileOpener: FileOpener,
              private document: DocumentViewer) {
  
  }

  abrirHTMLLocal(){
    let filePath = this.file.applicationDirectory + 'www/assets';

    if (this.platform.is('android')){
      let fakeName = Date.now();
      this.file.copyFile(filePath, '5-tools.html', this.file.dataDirectory, '${fakeName}.html').then(result => {
        this.fileOpener.open(result.nativeURL, 'application/html')
        .then(() => console.log('File is opened'))
        .catch(e => console.log('Error opening file', e));
      })
    } else {
      const options: DocumentViewerOptions ={
        title: 'My HTML'
      }
      this.document.viewDocument('${filePath}/5-tools.html', 'application/html', options)
    }
  }  
  

}
