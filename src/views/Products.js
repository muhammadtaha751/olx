import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Products() {
    const [product, setProduct] = useState()
    const params = useParams()
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => setProduct(res))
    }, [])

    if (!product) {
        return <div>...loading</div>
    }
    return (


        <div>
            <p>{product[params.id].url}</p>
        </div>
    )
}
export default Products;