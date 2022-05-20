import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from './../categoria.service';
import { Categoria } from './../categoria.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  }

  constructor(
    private service: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.categoria.id!).subscribe((resp) => {
      this.categoria = resp;
    })
  }

  update(): void {
    this.service.update(this.categoria).subscribe((resp) => {
    this.router.navigate(["categorias"]);
    this.service.mensagem("Categória atualizada com sucesso!");
    },
    err => {
      console.log(err);
    }
    )
  }

  cancel(): void {
    this.router.navigate(['categorias']);
  }
}
