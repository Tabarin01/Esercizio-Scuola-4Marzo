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
        'https://www.carnevalepegasus.com/gest/config/pegasus/media/m3568-follettino-0.992003.jpg',
    },
    {
      classe: 3,
      sezione: 'B',
      laboratorio: true,
      rappresentante: 'Andrea Scarrone',
      mascotte:
        'https://www.mascotte-gonfiabili.com/wp-content/uploads/2023/02/lilo-mascotte-disney.jpg',
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
