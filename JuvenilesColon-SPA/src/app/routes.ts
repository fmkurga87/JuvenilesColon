import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
// import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { JugadorListComponent } from './jugador/jugador-list/jugador-list.component';
import { JugadorListResolver } from './_resolvers/jugador-list.resolver';
import { JugadorDetailComponent } from './jugador/jugador-detail/jugador-detail.component';
import { JugadorDetailResolver } from './_resolvers/jugador-detail.resolver';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'jugadores', component: JugadorListComponent,
                resolve: {jugadores: JugadorListResolver}},
            { path: 'jugadores/:id', component: JugadorDetailComponent,
                resolve: {jugador: JugadorDetailResolver}},
            { path: 'messages', component: MessagesComponent},
            // { path: 'lists', component: ListsComponent},
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'},
];
