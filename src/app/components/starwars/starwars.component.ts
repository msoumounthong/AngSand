import { Component, OnInit } from '@angular/core';
import {MatSelect} from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface Animal {
  name: string;
  sound: string;
}
@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})

export class StarwarsComponent implements OnInit {
  public displayControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  public intarray: number[] = [0, 1, 2, 3, 4, 5] ;

ngOnInit() {
  console.log('adsf');
  this.displayControl.valueChanges.subscribe(changes => console.log(changes));
  this.intarray = this.returnDouble(this.intarray);
  this.intarray = this.returnDouble2(this.intarray);
}

returnDouble (x: number []): number[] {
  return x.map((i) => i * 2 ) ;
}
returnDouble2 (x: number []): number[] {
  for (let i in x) {
    x[i] = x[i] * 2;
  }
  return x;
}
}
