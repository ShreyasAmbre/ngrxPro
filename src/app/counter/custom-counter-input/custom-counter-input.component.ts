import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { customIncrement, updateChannelName } from '../state/counter.action';
import { channelNameSelector } from '../state/counter.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  
  incrementCount !: number;
  newChannelName !: string;

  channelName: string = ""
  channelName$ !: Observable<string>

  constructor(private store: Store<{ counterR: CounterState}>){}

  ngOnInit(): void {
    // 2nd way to get data from Store 
    // Getting Store data using Reducer 
    /* this.store.select('counterR').subscribe(stateData => {
      // Here we have disadvantage when we dispath other action ChannelName obervable also get call
      // To overcome this we use selector 
      console.log("Channel Observable call")
      this.channelName = stateData.channelName
    })*/


    //3rd Efficient way to get data from Store using SELECTOR
    this.store.select(channelNameSelector).subscribe(channelNameData => {
      // Here only Channel Name Observable wil get call when Channe Name Action is Dispatch

      console.log("Channel Observable call")
      this.channelName = channelNameData
    })

    // 4th Efficient way to get data from store using SELECTOR & Observable Variable with async Pipe in HTML 
    // this.channelName$ = this.store.select(channelNameSelector)
  }

  onCustomIncrement(){
    this.store.dispatch(customIncrement({value: this.incrementCount}))
  }

  modifieChannelName(){
    this.store.dispatch(updateChannelName({cname: this.newChannelName}))
  }



}
