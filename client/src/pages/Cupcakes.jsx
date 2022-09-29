import '../styles/cupcake.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link'

export default function Cupcakes() {
    const [cupcakesData, setCupcakes] = useState([])
    const [availableData, setAvailable] = useState([])
    const [eventData, setEvent] = useState([])
    const [customData, setCustom] = useState([])

    const [isLoaded, setIsLoaded] = useState(false)

    const [q, setQ] = useState("")
    const [searchParam] = useState(["title"])

    useEffect(() => {
        document.body.style.backgroundColor = "#fafafa";

        return () => {
            document.body.style.backgroundColor = null;
        }
    }, [])

    useEffect(() => {
        fetch('https://toronto-cupcake.herokuapp.com/product')
            .then((res) => res.json())
            .then((data) => {              
                setCupcakes(data.cupcakes)
                setAvailable(data.available)            
                setEvent(data.event)
                setCustom(data.custom)
            })
            .finally(() => {
                setIsLoaded(true)
            })
    }, [])

    function search(items) {
        return items.filter((item) => {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                )
            })
        })
    }

    const elements = search(cupcakesData).map((item) => {
        return (
            <HashLink to={`/product/cupcakes/${item.id}#`} key={item.id} style={{textDecoration: 'none', display: 'flex'}}>
                <div className="card">
                    <img className='card__image' src={item.image} alt={item.altImg} />
                    <p className='card__title'>{item.title}</p>
                    <p className='card__price'>RM98.00</p>
                </div>
            </HashLink>
        )
    })

    if (isLoaded) {
        return (
            <>  
                <Header />
    
                <h1 className="fs-800 ff-serif color-heading text-align">CUPCAKES</h1>
                <p className="fs-500 ff-sans-serif color-body text-align" style={{marginBottom: '4rem'}}>FRESHLY MADE AND ALWAYS AVAILABLE</p>
    
                <input 
                    type="search"
                    placeholder='Search for cupcake...'
                    id="search-input"
                    name="search-input"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                />
    
                <div className="product-wrapper">
                    { elements.length !== 0 ? elements : <p className="fs-700">No Result</p> }
                </div>
                
                <section data-aos="fade-up">
                    <h1 id="available" className="category fs-800 ff-serif color-heading text-align">ALWAYS AVAILABLE</h1>
                    {availableData.map((item) => {
                        return (
                            <div className="package">
                                <div className="package__img">
                                    <img src={item.image} alt={item.imgAlt} />
                                </div>
                                <div className="package__content">
                                    <h3 className="fs-700 color-heading">{item.title}</h3>
                                    <p>{item.contents}</p>
                                    <HashLink to={`/product/available/${item.id}#`}>
                                        <button className="package__btn fs-600" href="#">Read More</button>
                                    </HashLink>
                                </div>
                            </div>
                        )
                    })}
                </section>
                
                <section data-aos="fade-up">
                    <h1 id="holidays-events" className="category fs-800 ff-serif color-heading text-align">HOLIDAYS & EVENTS</h1>
                    {eventData.map((item) => {
                        return (
                            <div className="package">
                                <div className="package__img">
                                    <img src={item.image} alt={item.imgAlt} />
                                </div>
                                <div className="package__content">
                                    <h3 className="fs-700 color-heading">{item.title}</h3>
                                    <p>{item.contents}</p>
                                    <HashLink to={`/product/event/${item.id}#`}>
                                        <button className="package__btn fs-600" href="#">Read More</button>
                                    </HashLink>
                                </div>
                            </div>
                        )
                    })}
                </section>
            
                <section data-aos="fade-up">
                    <h1 id="custom" className="category fs-800 ff-serif color-heading text-align">CUSTOM</h1>
                    {customData.map((item) => {
                        return (
                            <div className="package">
                                <div className="package__img">
                                    <img src={item.image} alt={item.imgAlt} />
                                </div>
                                <div className="package__content">
                                    <h3 className="fs-700 color-heading">{item.title}</h3>
                                    <p>{item.contents}</p>
                                    <HashLink to={`/product/custom/${item.id}#`}>
                                        <button className="package__btn fs-600" href="#">Read More</button>
                                    </HashLink>
                                </div>
                            </div>
                        )
                    })}
                </section>
        
                <Footer  />
            </>
        )
    } else {
        return (
            <div className="loading-img">
                <img src="/image/loading.gif" alt="Page loading animation" />
            </div>
        )
    }
}


    