import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {
  jugadores: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getJugadores() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.jugadores = response;
    }, error => {
      console.log(error);
    });
  }
}
