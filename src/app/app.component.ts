import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'noticia-api';
  listadoDeNoticias: any[] = [];
  loading = false;

  constructor(private _api: NoticiasService) {}

  buscarNoticias(parametros: any) {
    this.loading = true;
    this.listadoDeNoticias = [];
    setTimeout(() => {
      this._api.getNoticias(parametros).subscribe((resultado) => {
        console.log(resultado);
        this.loading = false;
        this.listadoDeNoticias = resultado.articles;
      });
    }, 1000);
  }
}
