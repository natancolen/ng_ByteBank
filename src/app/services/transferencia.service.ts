import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[];

  constructor() { 
    this.listaTransferencia = [];
  }

  get transfercias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia);

    this.listaTransferencia.push(transferencia);
  }

  hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
