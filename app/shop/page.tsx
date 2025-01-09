import Product from "../components/Product"
import { getAllProduct } from "@/actions/Products"
export default async function page() {

    const products = await getAllProduct();
    console.log(products);
    
    return (
        <div>
            
            <h2>Product List({products?.length ?? 0})</h2>
            <div className="container-fluid bg-trasparent my-4 p-3 " >
            {products !== null ? (
                <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 ">
                    {products.map((item)=>{
                        return <Product product={item} key={item.id} />
                    })}
                </div>
            ):(
                <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 ">
                    <h1>NO PRODUCTS FOUND</h1>
                </div> 
            ) } 
            </div>
        
        </div>
    )
}