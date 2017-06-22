import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ald-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  POSTER_URL: string = 'https://image.tmdb.org/t/p/w160';

  movies: any[] = [
    {
      id: 1,
      title: 'Wonder Woman',
      overview: 'An Amazon princess comes to the world of Man to become the greatest of the female superheroes.',
      poster_path: '/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg'
    },
    {
      id: 2,
      title: 'Beauty and the Beast',
      overview: 'A live-action adaptation of Disneys version of the classic Beauty and the Beast tale of a cursed prince and a beautiful young woman who helps him break the spell.',
      poster_path: '/tWqifoYuwLETmmasnGHO7xBjEtt.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {

  }
}
