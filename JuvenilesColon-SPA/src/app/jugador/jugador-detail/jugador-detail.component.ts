import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Jugador } from 'src/app/_models/jugador';
import { ActivatedRoute } from '@angular/router';
import { JugadorService } from 'src/app/_services/jugador.service';

@Component({
  selector: 'app-jugador-detail',
  templateUrl: './jugador-detail.component.html',
  styleUrls: ['./jugador-detail.component.css']
})
export class JugadorDetailComponent implements OnInit {
  jugador: Jugador;


  constructor(private jugadorService: JugadorService, private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.jugador = data['jugador']
    });
  }

}
