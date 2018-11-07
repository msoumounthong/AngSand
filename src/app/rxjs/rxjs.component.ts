import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormGroup  } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  count: number;
  source: Observable<number>;
  fg = new FormGroup({
    timerLength : new FormControl('')
  });
  private unsubscribe: Subject<void> = new Subject();
 public valArray: number [] = [];
  constructor() { }

  ngOnInit() {
  }
  stop() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  start() {
    const timerVal: number = this.fg.controls['timerLength'].value;
   // get('timerLenth').value();
    if (this.unsubscribe.isStopped) {
    this.unsubscribe = new Subject();
    }
    this.source = interval(timerVal);

    this.source
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (value) =>  this.valArray.push(value),
      (error) => console.error(error),
      () => console.log('[takeUntil] complete')
    );

  }
  clear() {
    this.valArray = [];
  }

}
