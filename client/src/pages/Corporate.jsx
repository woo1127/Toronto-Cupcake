import "../styles/corporate.css"
import Testimonial from "../components/Testimonial"
import Brands from "../components/Brands"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Corporate() {
    return (
        <>  
            <Header />
            <h1 className="fs-800 ff-serif color-heading center-text">CORPORATE</h1>
            <h2 className="fs-500 ff-sans-serif color-body center-text">Some of our clients <br /> (Direct or through others)</h2>
            <hr />

            <div className="brands">
                <Brands />
            </div>

            <h2 className="fs-800 ff-serif color-heading center-text margin-text">Our Clients</h2>

            <Testimonial />

            <section data-aos="fade-up">
                <h2 className="fs-800 ff-serif color-heading center-text margin-text">Event displays</h2>
                <div className="testimonial">
                    <img className="testimonial-image2" src="image/eventdisplays.png" alt="event displays" />
                    <p className="fs-500 ff-sans-serif color-body testimonial-text">
                        We can use one of our many display stands or build one to your specs to display your theme cupcakes and <b>wow</b> your audience.
                    </p>
                </div>
            </section>
            
            <Footer />
        </>
    )
}