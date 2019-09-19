//Node modules folder
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
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthService } from './_services/auth.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { RegisterComponent } from './register/register.component';

@NgModule({
   declarations: [
      AppComponent,
      JugadorComponent,
      HomeComponent,
      NavComponent,
      MessagesComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      //AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
