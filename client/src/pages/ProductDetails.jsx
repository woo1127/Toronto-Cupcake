import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/productDetails.css'


export default function ProductDetails() {
    const [data, setData] = useState({})
    const location = useLocation()
    const [count, setCount] = useState(1)

    useEffect(() => {
        fetch(`https://toronto-cupcake.up.railway.app/product/find/${location.pathname.split('/')[2]}/${location.pathname.split('/')[3]}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                console.log(data)
            })
    }, [location.pathname])

    useEffect(() => {
        document.body.style.backgroundColor = "#fafafa";

        return () => {
            document.body.style.backgroundColor = null;
        }
    }, [])

    return (
        <>  
            <Header />
            <div className="product">
                <div className="product__image">
                    <img src={data.image} alt={data.imgAlt} />
                </div>
                <div className="product__content">
                    <h1 className='product__title'>{data.title}</h1>
                    <h2 className='product__price'>RM98.00</h2>
                    <h3 className='product__description-title'>Product Description</h3>
                    <p className="product__description">{data.contents}</p>
                    <div className="product__quantity">
                        <p>Quantity</p>
                        <div className="quantity-button">
                            <button 
                                className="minus-button"
                                onClick={() => {
                                    if (count <= 0) {
                                        setCount(1)
                                    }
                                    setCount((c) => c - 1)}
                                }
                            >-</button>
                            <input 
                                type="text"  
                                className='quantity-input' 
                                pattern='[1-9]+' 
                                value={count} 
                                onChange={(e) => setCount(e.target.value) } 
                            />
                            <button 
                                className="plus-button"
                                onClick={() => setCount((c) => c + 1)}
                            >+</button>
                        </div>
                    </div>
                    <button className="add-button">Add to Cart</button>
                    <button className="buy-button">Buy Now</button>
                    
                    {/* share to social media link */}
                    {/* <a target="_blank" href={`https://www.facebook.com/sharer.php?u=${location}`}>Share</a> */}
                </div>
            </div>
            <Footer />
        </>
    )
}