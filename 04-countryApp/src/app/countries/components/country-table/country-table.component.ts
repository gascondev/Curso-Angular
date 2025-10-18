import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',

  styles: [
    `img {
      width: 25px;
    }`
  ]
})
export class CountryTableComponent {

  // Propiedad decorada con @Input, lo que significa que el componente
  // padre puede pasarle un array de países para mostrar en la tabla.
  @Input()
  public countries: Country[] = [];
}


// Este archivo define el componente CountryTableComponent.
// 	•	Es un componente hijo pensado para mostrar una lista de países en una tabla.
// 	•	Recibe los datos a través de la propiedad countries, decorada con @Input(), lo que permite que un componente padre (como ByCapitalPageComponent) le pase la información.
// 	•	Tiene un estilo interno para mostrar banderas o imágenes de los países a un tamaño uniforme (25px).

// 👉 En resumen: Es un componente de presentación: no busca datos, solo los muestra en pantalla, recibiéndolos desde fuera.
