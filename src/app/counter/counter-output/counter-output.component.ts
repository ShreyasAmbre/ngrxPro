import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable } from 'rxjs';
import { counterSelector } from '../state/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  counterValue: number = 0

  counter: number = 0

  counter$ !: Observable<number>;

  constructor(private store: Store<{ counterR: CounterState }>){}

  ngOnInit(): void {
    // 1st way to get data from store
    // Getting Store data using Reducer
    // this.counter$ = this.store.select('counterR') 
    
    // 2nd way to get data from store
    // Getting Store data using Reducer
    /* this.store.select('counterR').subscribe(stateData => {
      // Here we have disadvantage when we dispath other action counter obervable also get call
      // To overcome this we use selector 
      console.log("Counter Observable call")
      this.counter = stateData.counter
    }) */

    // 3rd Efficient way to get data from store using SELECTOR
    this.store.select(counterSelector).subscribe(counterData => {
      // Here only Counter Observable wil get call when Counter Action is Dispatch
      console.log("Counter Observable call")
      this.counter = counterData
    })

    // 4th Efficient way to get data from store using SELECTOR & Observable Variable with async Pipe in HTML 
    // this.counter$ = this.store.select(counterSelector)
  }

}
