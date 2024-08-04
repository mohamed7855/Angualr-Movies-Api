import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Movie, MoviesResponse } from '../../interface/movie';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  listMovies!: Movie[]
  imgPath!:string

  constructor(private _ApiService: ApiService) { }
  ngOnInit(): void {
    this._ApiService
      .doGet<MoviesResponse>("https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=208fc5b0e7a3cf6254ee3fae0ee7c3e2")
      .subscribe((res) => {
        this.imgPath = this._ApiService.imgPath;
        this.listMovies=res.results
      })
  }
}
