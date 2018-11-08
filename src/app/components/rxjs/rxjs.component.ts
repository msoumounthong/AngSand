import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent2 implements OnInit {
  public source = interval(1000);
  //public source2 = new Promise(interval(1000));
  public dataArray: number[] = [];
  public display: number[];
  constructor() { }

  ngOnInit() {
    this.source.subscribe(val => this.dataArray.push(val));
    //this.
  }

  dostuff () {
    this.display = this.dataArray.map(x => x * 2 );
  }
  evens () {
    this.display = this.dataArray.filter(x => x % 2 === 0);
  }
  odds () {
    this.display = this.dataArray.filter(x => x % 2 === 1);
  }
  displayAll () {
    this.display = this.dataArray.map(x => x );
  }
  resetData() {
    console.log('Reseting');
    this.dataArray = [];
    this.source.lift.apply(interval(100));
    //this.source.lift.call(interval(100));
  }
}
