
import { Categoria } from './categoria.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  baseURL: String = environment.baseUrl;
  constructor(
    private http: HttpClient
  ) { }

  findAll():Observable<Categoria[]> {
    const url = `${this.baseURL}/categorias`;
    return this.http.get<Categoria[]>(url);
  }
}
