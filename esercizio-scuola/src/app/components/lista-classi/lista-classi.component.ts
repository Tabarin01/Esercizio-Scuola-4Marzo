import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoClassiService } from 'src/app/service/info-classi.service';

@Component({
  selector: 'app-lista-classi',
  templateUrl: './lista-classi.component.html',
  styleUrls: ['./lista-classi.component.css'],
})
export class ListaClassiComponent implements OnInit {
  classi: any;
  id: number = 0;
  constructor(
    private infoService: InfoClassiService,
    private route: ActivatedRoute
  ) {
    this.classi = infoService.getAll();
  }

  ngOnInit(): void {
    this.classi = this.infoService.getAll();
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
  }
}
