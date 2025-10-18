

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

// Declara el servicio como inyectable y disponible en toda la aplicación (singleton).
@Injectable({providedIn: 'root'})
export class CountriesService {

  // URL base de la API de países.
  private apiUrl: string = 'https://restcountries.com/v3.1'

  // Inyecta HttpClient para poder hacer peticiones HTTP.
  constructor(private http: HttpClient) { }

  // Método que busca países por el nombre de su capital.
  // Recibe un término (capital) y devuelve un Observable con un array de países.
  searchCapital( term: string ): Observable<Country[]> {

    // Construye la URL de la petición concatenando la capital al endpoint.
    const url = `${this.apiUrl}/capital/${term}`;

    // Realiza la petición GET y devuelve un Observable tipado con Country[].
    return this.http.get<Country[]>( url );
  }
}


// Este archivo define un servicio de Angular.
// 	•	Centraliza la lógica de acceso a la API https://restcountries.com/v3.1.
// 	•	Tiene un método público searchCapital(term) que construye la URL, hace la petición HTTP y devuelve un Observable<Country[]>.
// 	•	Delega en HttpClient para realizar la comunicación HTTP.
// 	•	El servicio está declarado como providedIn: 'root', lo que significa que se crea una única instancia (singleton) accesible en toda la aplicación.

// 👉 En resumen: Es la parte que se comunica con el backend (API): recibe el término, construye la petición y devuelve los datos.

