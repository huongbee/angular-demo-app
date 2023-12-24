import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { HerosComponent } from './heros/heros.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routeConfig: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
  {
    path: 'heros',
    component: HerosComponent,
    title: 'Tour of Heroes',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
  },
];

export default routeConfig;
