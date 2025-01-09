import { Product } from "@/types/types";
import axios from "axios";



export async function getAllProduct() {
    try {
        const res= await axios.get("https://dummyjson.com/products")
        const products = res.data.products
        return products as Product[]
    } catch (error) {
        console.log(error);
        return null
        
    }
}