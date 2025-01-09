
"use client"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { decerement, incerement } from "../store/slices/counterSlice"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image"
import { type Product } from "@/types/types"

export default function Product({product} : {product :Product}){
    
// `/${product.images[0]}`
    return(
        <div>
                    <div className="col mt-4">
                        <div className="card h-100 shadow-sm ">
                            <Image className="card-img-top p-2" src={`${product.images[0]}`} alt="nike" width={200} height={200}  />
                            <div className="card-body">
                                <div className="clearfix mb-3">
                                    <span className="float-end price-hp">{product.price} TND</span>
                                </div>
                                <h5 className="card-title">
                                    {product.title}
                                </h5>
                                <div className="text-center my-4">
                                    <a href="#" className="btn btn-warning">Add to cart</a>
                                </div>
                                </div>
                         </div>
                    </div>
                </div>
        
    )
}

                