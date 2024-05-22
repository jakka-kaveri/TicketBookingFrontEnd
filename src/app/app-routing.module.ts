import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MovieSelectionComponent } from './movie-selection/movie-selection.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'movie-selection', component: MovieSelectionComponent },
  { path: 'seat-selection', component: SeatSelectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
