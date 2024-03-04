import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { InfoClassiService } from 'src/app/service/info-classi.service';

@Component({
  selector: 'app-dettaglio-classe',
  templateUrl: './dettaglio-classe.component.html',
  styleUrls: ['./dettaglio-classe.component.css'],
})
export class DettaglioClasseComponent implements OnInit {
  id: number = 0;
  @Input() classe: any;
  
  constructor(
    private route: ActivatedRoute,
    private infoService: InfoClassiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
      this.classe = this.infoService.getClasse(this.id);
      console.log(this.id);
    });
  }
}
