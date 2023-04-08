import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @Output() parametrosSeleccionados = new EventEmitter<any>();
  categoriaSeleccionada = 'general';
  paisSeleccionado = 've';
  categorias: any[] = [
    { value: 'general', nombre: 'General' },
    { value: 'business', nombre: 'Business' },
    { value: 'entertaiment', nombre: 'Entretenimientos' },
    { value: 'health', nombre: 'Salud' },
    { value: 'science', nombre: 'Ciencia' },
    { value: 'sports', nombre: 'Deportes' },
    { value: 'technology', nombre: 'Tecnología' },
  ];

  paises: any[] = [
    { value: 'ar', nombre: 'Argentina' },
    { value: 've', nombre: 'Venezuela' },
    { value: 'br', nombre: 'Brasil' },
    { value: 'fr', nombre: 'Francia' },
    { value: 'mx', nombre: 'Mexico' },
    { value: 'hu', nombre: 'Hungria' },
  ];

  constructor() {}

  ngOnInit(): void {}

  buscarNoticia() {
    // console.log(this.categoriaSeleccionada);
    // console.log(this.paisSeleccionado);

    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado,
    };
    this.parametrosSeleccionados.emit(PARAMETROS);
  }
}
