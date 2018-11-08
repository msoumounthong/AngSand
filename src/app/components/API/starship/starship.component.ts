import { Component, OnInit } from '@angular/core';
import {Starship } from '../../../models/starship.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { MatListModule, MatCheckbox } from '@angular/material';

import { Resp} from '../../../models/resp.model';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {
  public dataArray: Array<Starship> = [];
  public nextLink: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  getData() {
    this.http.get('https://swapi.co/api/starships/').subscribe((data: Resp) => {
      console.log(data);
      const rows: any = data.results;
      this.nextLink = data.next;
      console.log(this.nextLink);
      for (const row of rows) {
      let f = new Starship();
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
        let f = new Starship();
        f = row;
        this.dataArray.push(f);
        }
    });
  }
}

