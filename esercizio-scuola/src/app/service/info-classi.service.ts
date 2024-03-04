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
      mascotte: 'https://i.ebayimg.com/images/g/br0AAOSwg69hbAPx/s-l1200.webp',
    },
    {
      classe: 3,
      sezione: 'B',
      laboratorio: true,
      rappresentante: 'Andrea Scarrone',
      mascotte:
        'https://i.dailymail.co.uk/1s/2023/01/03/15/66151061-11595191-image-m-225_1672761020998.jpg',
    },
    {
      classe: 5,
      sezione: 'D',
      laboratorio: true,
      rappresentante: 'Micheal Jordan',
      mascotte:
        'https://www.redbled.com/wp-content/uploads/2023/11/brazzers-pornstars-1200x720.jpg',
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
