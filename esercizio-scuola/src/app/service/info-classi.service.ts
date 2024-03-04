import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InfoClassiService {
  classi: {
    classe: number;
    sezione: string;
    laboratorio: boolean;
    rappresentante: string;
    mascotte: string;
  }[] = [
    {
      classe: 4,
      sezione: 'C',
      laboratorio: true,
      rappresentante: 'Luna Stardust',
      mascotte:
        'https://ih1.redbubble.net/image.4909511332.3792/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
    },
    {
      classe: 2,
      sezione: 'D',
      laboratorio: false,
      rappresentante: 'Neo Flux',
      mascotte:
        'https://cdn.corrieredellosport.it/images/2020/05/17/132405093-9c63a25a-4276-4882-b454-a517574022bf.jpeg',
    },
    {
      classe: 5,
      sezione: 'B',
      laboratorio: true,
      rappresentante: 'Astra Nova',
      mascotte: 'https://i.ebayimg.com/images/g/Nh0AAOSwopljvN4H/s-l1200.webp',
    },
    {
      classe: 1,
      sezione: 'E',
      laboratorio: false,
      rappresentante: 'Cosmo Spark',
      mascotte:
        'https://c4.wallpaperflare.com/wallpaper/937/112/903/adults-riley-reid-brunette-face-wallpaper-preview.jpg',
    },
    {
      classe: 2,
      sezione: 'A',
      laboratorio: true,
      rappresentante: 'Mario Rossi',
      mascotte:
        'https://www.socialmediasoccer.com/fileadmin/_processed_/3/b/csm_Schermata_2022-04-01_alle_15.53.01-min_b775c0ed9a.png',
    },
    {
      classe: 3,
      sezione: 'A',
      laboratorio: true,
      rappresentante: 'Mario Fringuelli',
      mascotte:
        'https://www.yardbarker.com/media/4/4/4430df731e3628f5922a6a04acc82c276b975235/thumb_16x9/8977515.jpg',
    },
    {
      classe: 3,
      sezione: 'B',
      laboratorio: true,
      rappresentante: 'Andrea Scarrone',
      mascotte:
        'https://img.bleacherreport.net/img/slides/photos/003/901/874/hi-res-0a10a21f5a96924445613bbef74d0759_crop_exact.jpg?w=2975&h=2048&q=85',
    },
    {
      classe: 5,
      sezione: 'D',
      laboratorio: true,
      rappresentante: 'Micheal Jordan',
      mascotte:
        'https://images.squarespace-cdn.com/content/v1/5c6463897fdcb8d3e8cf7d9c/1560817385865-A86N711HU2I17MV9NY9S/benny-the-bull.jpg',
    },
  ];

  constructor() {}

  addClasse(
    classe: number,
    sezione: string,
    laboratorio: boolean,
    rappresentante: string,
    mascotte: string
  ) {
    this.classi.push({
      classe,
      sezione,
      laboratorio,
      rappresentante,
      mascotte,
    });
  }

  getClasse(index: number) {
    return this.classi[index];
  }

  getAll() {
    return this.classi;
  }
}
