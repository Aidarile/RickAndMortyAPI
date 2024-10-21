import { Routes } from '@angular/router';
import { CharListComponent } from './components/char-list/char-list.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CharDetailComponent } from './components/char-detail/char-detail.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'characters',
        pathMatch: 'full'
    },
    {
        path: 'characters',
        component: CharListComponent
    },
    {
        path: 'char-detail/:id',
        component: CharDetailComponent
    },
    {
        path: '**',
        component: ErrorPageComponent,
        pathMatch: 'full'
    }
];
