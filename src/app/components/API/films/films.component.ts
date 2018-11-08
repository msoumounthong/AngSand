import { Component, OnInit } from '@angular/core';
import {Film } from '../../../models/film.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { MatListModule, MatCheckbox } from '@angular/material';

import { Resp} from '../../../models/resp.model';
import { map } from 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  public dataArray: Array<Film> = [];
  public nextLink: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  getData() {
    this.http.get('https://swapi.co/api/films/').subscribe((data: Resp) => {
      console.log(data);
      const rows: any = data.results;
      this.nextLink = data.next;
      console.log(this.nextLink);
      for (const row of rows) {
      let f = new Film();
      f = row;
      console.log(f);
        this.dataArray.push(f);
        }
    });
  }
  loadNext(url: string) {
    this.http.get(url).subscribe((data: Resp) => {
      const rows: any = data.results;
      this.nextLink = data.next;
        for (const row of rows) {
        let f = new Film();
        f = row;
        this.dataArray.push(f);
        }
    });
  }
}

