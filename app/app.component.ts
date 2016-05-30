import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h2>Popular Movies this month</h2>
      <div class="row grid-view">
        <div *ngFor="let movie of movies" class="col-md-3">
          <div class="movie">
            <img src="{{movie.imgPath}}" />
            <h3>{{movie.name}}</h3>
            <p>{{movie.duration}}</p>
            <p>User Rating: {{movie.userRating}}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .grid-view .movie {
      height: 500px;
      cursor: pointer;
    }
    .grid-view .movie img {
      height: 70%;
    }
  `],
  providers: [
    MovieService
  ]
})
export class AppComponent implements OnInit {
  title = 'Movie Listings @ GV Cinema';
  movies: Movie[] = [];

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe(
      data => {
        this.movies = data.movies;
      }
    )
  }
}