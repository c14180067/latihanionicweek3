import { Component } from '@angular/core';
import { formatDate } from '@angular/common';
import { GlobalvarService } from '../globalvar.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  judul: string;
  isi: string;
  tanggal;

  constructor(private globalvar: GlobalvarService, private alertController: AlertController, private router: Router) {
    this.tanggal = new Date();
    this.tanggal = formatDate(this.tanggal, "yyyy-MM-dd", "en-US");
  }

  saveNote() {
    if(this.judul != "" && this.isi != "") {
      console.log(this.judul);
      this.globalvar.setNote(this.judul, this.isi, this.tanggal);
      this.judul = "";
      this.isi = "";
      this.presentAlert();
    }
  }

  keDua() {
    this.router.navigate(['/hal2']);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Note telah disimpan!',
      buttons: ['OK']
    });
    await alert.present();
  }

}
