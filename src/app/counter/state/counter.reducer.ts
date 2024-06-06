import { createReducer, on } from "@ngrx/store"
import { initialState } from "./counter.state"
import { decrement, increment, customIncrement, reset, updateChannelName } from "./counter.action"


const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(customIncrement, (state, action) => {
        console.log(action) // {value: 2, type: customIncrement}
        return {
            ...state,
            counter: state.counter + action.value 
        }
    }),
    on(updateChannelName, (state, action) => {
        return {
            ...state,
            channelName: action.cname
        }
    })


)

export function counterReducer(state: any, action: any){
    return _counterReducer(state, action)
}