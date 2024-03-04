import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InfoClassiService } from 'src/app/service/info-classi.service';

@Component({
  selector: 'app-form-classi',
  templateUrl: './form-classi.component.html',
  styleUrls: ['./form-classi.component.css'],
})
export class FormClassiComponent implements OnInit {
  formInserimento: FormGroup;

  constructor(private infoService: InfoClassiService) {}

  ngOnInit(): void {
    this.formInserimento = new FormGroup({
      classe: new FormControl(null, Validators.required),
      sezione: new FormControl(null, Validators.required),
      laboratorio: new FormControl(false),
      rappresentante: new FormControl(null, Validators.required),
      mascotte: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    if (this.formInserimento.valid) {
      console.log(this.formInserimento.value);
      this.infoService.addClasse(
        this.formInserimento.value.classe,
        this.formInserimento.value.sezione,
        this.formInserimento.value.laboratorio,
        this.formInserimento.value.rappresentante,
        this.formInserimento.value.mascotte
      );
    }
    console.log(this.infoService.getAll());
  }
}
