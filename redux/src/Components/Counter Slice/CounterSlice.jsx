
import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    count: 0
}

const counterSlice=createSlice({
name:'counter',
initialState,
reducers:{
    increment:(state,action)=>{
        state.count=state.count+1
    },
    decrement: (state, action)=> {
        state.count=state.count-1
    }
}
})

export default  counterSlice.reducer
export const {increment} = counterSlice.actions
export const {decrement} = counterSlice.actions