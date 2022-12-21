import { Filme } from './../shared/models/filme';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = 'http://localhost:3000/filmes/';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  salvar(filme: Filme): Observable<Filme> {
    return this.httpClient.post<Filme>(url, filme);
  }

  listar(pagina: number, qtdPagina: number): Observable<Filme[]> {
    let httpParamns = new HttpParams();
    httpParamns = httpParamns.set('_page', pagina.toString());
    httpParamns = httpParamns.set('_limit', qtdPagina.toString());
    return this.httpClient.get<Filme[]>(url, {params: httpParamns});
  }
}
