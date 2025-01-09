"use client"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { decerement, incerement } from "../store/slices/counterSlice"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function counter(){
    // const [counter, setCounter]= useState(0)
    const counter= useSelector((state:RootState)=> state.counter.value)
    const dispatch= useDispatch()

    function handleIncrement(){
        dispatch(incerement())
    }
    function handleDecrement(){
        dispatch(decerement())
    }
    return(
        <div className="d-flex gap-3 wrap justify-content-center flex-column text-center pr-3">
            <h2 className="text-center fw-bold text-primary my-4 text-shadow">redux counter</h2>
            
            <div className="d-flex align-items-center justify-content-center gap-3">
                <button className="btn btn-danger btn-sm" onClick={handleDecrement}>-</button>
                <div className="fs-4 fw-bold">{counter}</div>
                <button className="btn btn-success btn-sm" onClick={handleIncrement}>+</button>
            </div>

        </div>
    )
}