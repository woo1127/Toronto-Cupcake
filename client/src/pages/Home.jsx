import '../styles/home.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Service from '../components/Service'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>  
            <Header />
            <section>
                <div className="hero container">
                    <div className="hero__section">
                        <h1 data-aos="zoom-in-up" className="fs-900 ff-serif color-heading uppercase">Toronto<br />Cupcakes</h1>
                        <p>
                            Welcome! Thank you for stopping by Toronto Cupcake.
                            Canada's and the GTA's favourite stop for that special treat.
                            Order cupcakes online 24/7 for your special event.
                        </p>
                        <Link to="/" style={{textDecoration: "none"}}>
                            <span className="hero__btn btn fs-600 bg-accent">Get Started</span>
                        </Link>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up" className="section" id="section">
                <h2 className="fs-800 ff-serif color-heading uppercase section-heading">our service</h2>   
                <div className="service container">
                    <Service />
                </div>   
            </section>

            <section data-aos="fade-up" className="section section--menu">
                <h2 className="ff-serif fs-800 color-heading uppercase section-heading">menu</h2>
                <div className="container menu">
                    <Menu />
                </div>
            </section>

            <section className="section"></section>
            <Footer />
        </>
    )
}