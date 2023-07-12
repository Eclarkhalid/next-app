import ProdForm from "@/components/prodform";
import Layout from "@/pages/layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditProduct() {
    const [productInfo, setProductInfo] = useState(null);
    const router = useRouter();
    const {id} = router.query;
    useEffect(() => {
        if (!id){
            return;
        }
        axios.get('/api/products?id = ' + id).then(response => {
            setProductInfo(response.data);
        });
    }, [id]);
    return <>
    <Layout>
    <div className="text-center mb-5 mt-5">
        <h2><b>Edit Item Details</b></h2> 
    </div>
    {productInfo && (
        <ProdForm {...productInfo} />
    )}
    </Layout>
    </>;
}