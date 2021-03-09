import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-hal3',
  templateUrl: './hal3.page.html',
  styleUrls: ['./hal3.page.scss'],
})
export class Hal3Page implements OnInit {

  private notes = [];

  constructor(private globalvar: GlobalvarService, private router: Router, private alertController: AlertController) { 
    this.notes = globalvar.getNote();
  }

  ngOnInit() {
  }

  keDua() {
    this.router.navigate(['/hal2']);
  }

  unfavorite(no) {
    this.globalvar.setUnfavorite(no);
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Note dihapus dari daftar favorite!',
      buttons: ['OK']
    });
    await alert.present();
  }
}
