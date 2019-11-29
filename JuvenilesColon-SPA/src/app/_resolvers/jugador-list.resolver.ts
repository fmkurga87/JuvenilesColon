import { Injectable } from '@angular/core';
import { Jugador } from '../_models/jugador';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { JugadorService } from '../_services/jugador.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class JugadorListResolver implements Resolve<Jugador[]> {
    constructor(private jugadorService: JugadorService,
                private router: Router, private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Jugador[]> {
        return this.jugadorService.getJugadores().pipe(
            catchError(error => {
                this.alertify.error('Hubo un problema recuperando los datos');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
