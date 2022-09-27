import { ValidarCamposService } from './../validar-campos.service';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent {

  @Input() titulo: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  constructor(
    public validarCamposService: ValidarCamposService,
  ) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
