
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ProdForm({_id,title:existingTitle, description:existingDescription, price:existingPrice}) {
    const [title, setTitle] = useState(existingTitle || ''); 
    const [description, setDescription] = useState(existingDescription ||'');
    const [price, setPrice] = useState(existingPrice ||'');
    const [goToProduct , setGoToProduct] = useState('');
    const router = useRouter();
    console.log(_id);
    async function createProduct(ev){
        ev.preventDefault();
        const data = {title,description,price};
        await axios.post('/api/products', data);
        setGoToProduct(true);
        if (goToProduct) {
            router.push('../products');
        }
    }
    return <>
        <div className="new-products p-6">
            <div className="layout p-8">
                <form onSubmit={createProduct} >
                    <div className="mb-4 flex flex-col">
                    <label htmlFor="product-name">Product Name</label>
                    <input type="text" placeholder="product name" value={title} onChange={ev => setTitle(ev.target.value)}/>
                    </div>
                    <div className="mb-4 flex flex-col">
                    <label htmlFor="product-description">Description</label>
                    <textarea type="text" placeholder="product description" value={description} onChange={ev => setDescription(ev.target.value)}/>
                    </div>
                    <div className="mb-4 flex flex-col">
                    <label htmlFor="product-price">Price (USD)</label>
                    <input type="number" name="" placeholder="product price" value={price} onChange={ev => setPrice(ev.target.value)}/>
                    </div>
                    
                        <button type="submit">Save</button>
                </form>
            </div>
        </div>
    </>
}