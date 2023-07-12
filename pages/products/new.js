import ProdForm from "@/components/prodform";
import Layout from "@/pages/layout";

export default function NewProduct() {
    return <>
    <Layout>
    <div className="text-center mb-5 mt-5">
        <h2><b>Add New Item</b></h2> 
    </div>
    <ProdForm />
    </Layout>
    </>
}