import { ValidarCamposService } from './../validar-campos.service';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent {

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
