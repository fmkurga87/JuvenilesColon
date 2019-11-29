import { Component, OnInit, Input } from '@angular/core';
import { Jugador } from 'src/app/_models/jugador';

@Component({
  selector: 'app-jugador-card',
  templateUrl: './jugador-card.component.html',
  styleUrls: ['./jugador-card.component.css']
})
export class JugadorCardComponent implements OnInit {
  @Input() jugador: Jugador;

  constructor() { }

  ngOnInit() {
  }

}
