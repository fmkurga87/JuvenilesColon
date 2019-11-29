// Node modules folder
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

// Local components
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JugadorComponent } from './jugador/jugador.component';
import { JugadorListComponent } from './jugador/jugador-list/jugador-list.component';
import { JugadorCardComponent } from './jugador/jugador-card/jugador-card.component';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthService } from './_services/auth.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { RegisterComponent } from './register/register.component';
import { JwtModule } from '@auth0/angular-jwt';
import { JugadorListResolver } from './_resolvers/jugador-list.resolver';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './_guards/auth.guard';
import { JugadorService } from './_services/jugador.service';
import { JugadorDetailResolver } from './_resolvers/jugador-detail.resolver';
import { JugadorDetailComponent } from './jugador/jugador-detail/jugador-detail.component';


export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      JugadorComponent,
      JugadorListComponent,
      JugadorCardComponent,
      JugadorDetailComponent,
      HomeComponent,
      NavComponent,
      MessagesComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      // AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      }),
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      JugadorService,
      JugadorListResolver,
      JugadorDetailResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
