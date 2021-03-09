import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-hal2',
  templateUrl: './hal2.page.html',
  styleUrls: ['./hal2.page.scss'],
})
export class Hal2Page implements OnInit {

  private notes = [];

  constructor(private globalvar: GlobalvarService, private router: Router, private alertController: AlertController) {
    this.notes = globalvar.getNote();
  }

  ngOnInit() {
  }

  keSatu() {
    this.router.navigate(['/home']);
  }

  keTiga() {
    this.router.navigate(['/hal3']);
  }

  favorite(no) {
    this.globalvar.setFavorite(no);
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Note telah difavoritkan!',
      buttons: ['OK']
    });
    await alert.present();
  }
}
