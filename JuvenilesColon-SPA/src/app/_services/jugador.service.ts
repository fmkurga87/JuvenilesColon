import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jugador } from '../_models/jugador';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getJugadores(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(this.baseUrl + 'jugadores');
  }

  getJugador(id): Observable<Jugador> {
    return this.http.get<Jugador>(this.baseUrl + 'jugadores/' + id);
  }

}
