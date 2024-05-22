import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-selection',
  templateUrl: './movie-selection.component.html',
  styleUrls: ['./movie-selection.component.css']
})
export class MovieSelectionComponent {
  movies: string[] = ['Movie 1', 'Movie 2', 'Movie 3'];

  constructor(private router: Router) {}

  selectMovie(movie: string) {
    localStorage.setItem('selectedMovie', movie);
    this.router.navigate(['/seat-selection']);
  }
}
