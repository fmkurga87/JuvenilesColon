import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { JugadorService } from 'src/app/_services/jugador.service';
import { Jugador } from 'src/app/_models/jugador';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jugador-list',
  templateUrl: './jugador-list.component.html',
  styleUrls: ['./jugador-list.component.css']
})
export class JugadorListComponent implements OnInit {

  jugadores: Jugador[];

  constructor(private jugadorService: JugadorService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.jugadores = data['jugadores'];
    });
  }

}
