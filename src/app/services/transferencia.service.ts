import { environment } from './../../environments/environment';
import { Transferencia } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = environment.URL;

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transfercias() {
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: any): Observable<Transferencia> {
    this.hidratar(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
