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
        'https://www.pupapazza.com/wp-content/uploads/2021/08/mod-1.jpg',
    },
    {
      classe: 2,
      sezione: 'D',
      laboratorio: false,
      rappresentante: 'Neo Flux',
      mascotte:
        'https://www.figc.it/media/194497/home-mascotte.jpg?width=618&height=409&mode=max',
    },
    {
      classe: 5,
      sezione: 'B',
      laboratorio: true,
      rappresentante: 'Astra Nova',
      mascotte:
        'https://www.hvstore.it/wp-content/uploads/2023/07/2023-07-07_ECOMM_HELLASVERONA0632.jpg',
    },
    {
      classe: 1,
      sezione: 'E',
      laboratorio: false,
      rappresentante: 'Cosmo Spark',
      mascotte:
        'https://www.pupapazza.com/wp-content/uploads/2021/12/IMG_2993-scaled.jpg',
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
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/2020-PVHB-Mascotte-Marguerite-04.jpg/330px-2020-PVHB-Mascotte-Marguerite-04.jpg',
    },
    {
      classe: 3,
      sezione: 'B',
      laboratorio: true,
      rappresentante: 'Andrea Scarrone',
      mascotte:
        'https://www.noleggio-gonfiabile.it/wp-content/uploads/2023/08/paperino-mascotte.png',
    },
    {
      classe: 5,
      sezione: 'D',
      laboratorio: true,
      rappresentante: 'Micheal Jordan',
      mascotte:
        'https://www.parigi.it/images/mascotte-copyright-paris-2024.jpg?v=b71d',
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
