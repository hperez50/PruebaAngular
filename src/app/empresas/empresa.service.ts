import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from './empresa';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {
  private url: string = 'http://localhost:8080/api/companys/';

  constructor(private http: HttpClient) {}

  // Obtener empresa
  getAll(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.url);
  }

  // Crear empresa
  create(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.url, empresa);
  }

  //Obtener un id empresa
  get(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(this.url + '/' + id);
  }

  //Actualizar una empresa
  update(empresa: Empresa): Observable<Empresa> {
    return this.http.put<Empresa>(this.url, empresa);
  }

  //eliminar un id empresa
  delete(id: number): Observable<Empresa> {
    return this.http.delete<Empresa>(this.url + '/' + id);
  }
}
