import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  // Propiedad pública que almacenará el listado de países obtenidos.
  public countries: Country[] = [];

  // Inyección del servicio CountriesService para poder usarlo dentro del componente.
  constructor( private countriesService: CountriesService) { }

  // Método que busca países a partir del nombre de una capital.
  searchByCapital( term: string ): void {

    // Llama al método del servicio encargado de hacer la petición a la API.
    // Se suscribe al observable para recibir los datos una vez que llegan.
    this.countriesService.searchCapital( term )
    .subscribe( countries => {
      // Asigna los países recibidos a la propiedad del componente.
      this.countries = countries;
    });
  }
}


// Este archivo define un componente de Angular.
// 	•	El componente se encarga de buscar países a partir del nombre de una capital que el usuario introduce.
// 	•	Para ello, guarda en la propiedad countries la lista de países obtenida.
// 	•	Usa el servicio CountriesService para hacer la petición a la API.
// 	•	Cuando recibe la respuesta (observable), asigna los datos al componente para mostrarlos en la vista (by-capital-page.component.html).

// 👉 En resumen: Es la parte visual y lógica del usuario: recibe el término de búsqueda, llama al servicio y actualiza la vista.
