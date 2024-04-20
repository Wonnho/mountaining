import {configureStore, createSlice} from "@reduxjs/toolkit";
import user from "./store/userSlice";

let stock =createSlice(
    {
        name:'stock',
        initialState:[10,11,12]
    }
)

export let {changeName,changeHeadMinus,changeHeadPlus}=user.actions


let book=createSlice(
    {
        name:'book',
        initialState:[
            {id:0, name:'박수철',date:'2024년 4월 19일', count:2},
            {id:2,name:'김태용',date:'2024년 4월 12일',count:10}
        ]
    }
)

export default configureStore({
    reducer:{
        user:user.reducer,
        stock:stock.reducer,
        book:book.reducer
    }

})