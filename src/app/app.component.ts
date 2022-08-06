import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ByteBank';

  constructor(private service: TransferenciaService) {}

  transferir($event: Event) {
    this.service.adicionar($event);
  }
}
