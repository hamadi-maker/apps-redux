import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number
}

const initialState : CounterState = { value: 0}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        incerement : (state) => {
            state.value += 1 
        },
        decerement : (state) => {
            state.value -= 1
        }
    }
})

export const {incerement, decerement} = counterSlice.actions

export default counterSlice.reducer