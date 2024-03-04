import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { InfoClassiService } from 'src/app/service/info-classi.service';

@Component({
  selector: 'app-dettaglio-classe',
  templateUrl: './dettaglio-classe.component.html',
  styleUrls: ['./dettaglio-classe.component.css'],
})
export class DettaglioClasseComponent implements OnInit {
  @Input() classe: any;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private infoService: InfoClassiService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
      this.classe = this.infoService.getClasse(this.id);
      console.log(this.id);
    });
  }
}
