import { Component, OnInit } from '@angular/core';
import { FilmesService } from 'src/app/core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';

@Component({
  selector: 'dio-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

  filmes: Filme[] = [];
  pagina = 0;
  readonly limit = 4;

  constructor(
    private filmesService: FilmesService
  ) { }

  ngOnInit() {
    this.listarFilmes();
  }
  
  open() {
  }
  
  onScroll(): void {
    this.listarFilmes();
  }
  
  private listarFilmes() : void{
    this.pagina++;
    this.filmesService.listar(this.pagina, this.limit).subscribe((filmes: Filme[]) => this.filmes.push(...filmes));
  }

}
