import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalvarService {

  private noteList = [];

  constructor() { }

  public getNote() {
    return this.noteList;
  }

  public setNote(judul, isi, tanggal) {
    var data = {
      judul: judul,
      isi: isi,
      tanggal: tanggal,
      favorite: false
    };
    this.noteList.push(data);
  }

  public setFavorite(no) {
    this.noteList[no].favorite = true;
  }

  public setUnfavorite(no) {
    this.noteList[no].favorite = false;
  }
}
