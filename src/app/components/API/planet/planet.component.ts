import { Component, OnInit } from '@angular/core';
import {Planent } from '../../../models/planet.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { MatListModule, MatCheckbox } from '@angular/material';

import { Resp} from '../../../models/resp.model';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  public dataArray: Array<Planent> = [];
  public nextLink: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  getData() {
    this.http.get('https://swapi.co/api/planets/').subscribe((data: Resp) => {
      console.log(data);
      const rows: any = data.results;
      this.nextLink = data.next;
      console.log(this.nextLink);
      for (const row of rows) {
      let f = new Planent();
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
        let f = new Planent();
        f = row;
        this.dataArray.push(f);
        }
    });
  }
}

