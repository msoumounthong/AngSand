import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { MatListModule, MatCheckbox } from '@angular/material';
import { Person } from '../../models/person.model';
import { Resp} from '../../models/resp.model';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/map';
@Component({
  selector: 'app-swget',
  templateUrl: './swget.component.html',
  styleUrls: ['./swget.component.css']
})
export class SwgetComponent implements OnInit {
  title = 'app';
  public dataArray: Array<Person> = [];
  public nextLink: string;
  // public dataArray[];
constructor(private http: HttpClient) {
}
  ngOnInit(): void {
   this.http.get('https://swapi.co/api/people/').subscribe((data: Resp) => {
     const rows: any = data.results;
     this.nextLink = data.next;
     console.log(this.nextLink);
     for (const row of rows) {
     let p = new Person();
    p = row;
     console.log(p);
       this.dataArray.push(p);
       }



  });
}
  loadNext(url: string) {
    this.http.get(url).subscribe((data: Resp) => {
      // console.log(data);});
      // data.json
      const rows: any = data.results;
      this.nextLink = data.next;
      for (const row of rows) {
      let p = new Person();
      p = row;

      // p.name= row.name;

      console.log(p);
        this.dataArray.push(p);
        }
    });

  }

}
