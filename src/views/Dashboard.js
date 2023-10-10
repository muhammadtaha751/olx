import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";


function Dashboard() {
    const [products, setProducts] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => setProducts(res))
    }, [])

    if (!products) {
        return <div>
            ...loading
        </div>
    }

    return (
        <div className="grid">

            {products.map(function (item, index) {
                return <div className="grid">
                    <Card onClick={() => navigate('dashboard/' + index)} price={item.price} title={item.title} images=<img style={{ width: 100 }} src={item.image} /> />
                </div>
            })}
        </div>
    )
}

export default Dashboard;