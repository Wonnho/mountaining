import {createSlice} from "@reduxjs/toolkit";

let user=createSlice(
    {
        name: 'user',
        initialState: {name:'Jasica', head:5, count:0},
        reducers: {
            changeName(state) {
                state.name='박수용'},
            changeHeadPlus(state,change){
                state.head+=change.payload},
            changeHeadMinus(state,change){
                state.head-=change.payload}}
    }

)
export default user
