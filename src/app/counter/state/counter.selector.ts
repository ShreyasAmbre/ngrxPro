import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";


const counterFeatureSelector = createFeatureSelector<CounterState>('counterR') 

export const counterSelector = createSelector(counterFeatureSelector, state => {
    return state.counter
})

export const channelNameSelector = createSelector(counterFeatureSelector, state => {
    return state.channelName
})