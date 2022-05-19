import { Categoria } from './../categoria.model';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  }

  constructor(
    private service: CategoriaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.findById();
  }

  findById(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.service.findById(id).subscribe((resp) => {
      this.categoria = resp;
    })
  }

}
