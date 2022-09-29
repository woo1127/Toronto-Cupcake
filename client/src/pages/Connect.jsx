import "../styles/connect.css"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Connect() {
    return (
        <>  
            <Header />
            <section className="section contact">
                <h1 className="fs-800 ff-serif uppercase color-heading section-heading">give us a ring or click</h1>
                <address>
                    <p>To contact us by phone please call:</p>
                    <p>North America: <a href="tel:+18773349468">+1-877-334-9468</a></p>
                    <p>Outside of North Am: <a href="tel:+0016474789464">+001-647-478-9464</a></p>
                    <p>Local Toronto and GTA: <a href="tel:6474789464">647-478-9464</a></p>
                    <p>Email us at: <a href="mailto:inquiry@torontocupcake.com?subject=Hi">inquiry@torontocupcake.com</a> with any type of question, concern or comment.</p>
                </address>
            </section>

            <section className="section bg-pink" data-aos="fade-up">
                <div className="location">
                    <h1 className="fs-800 ff-serif uppercase color-heading section-heading">Location</h1>
                    <p className="fs-500">Planned location flagship store</p>
                    <iframe title="Map of Shop" className="location__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.930769060989!2d-79.3002175645548!3d43.67040963525142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cc0771d13aab%3A0xd465ec3f72760975!2sQueen%20St%20E%20%26%20Lee%20Ave%2C%20Toronto%2C%20ON%20M4E%201E5!5e0!3m2!1sen!2sca!4v1594914856725!5m2!1sen!2sca" width="600" height="450" style={{border: '0'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
            </section>

            <section className="section" data-aos="fade-up">
                <div className="container">
                    <h1 className="fs-800 ff-serif uppercase color-heading section-heading">Connect with us!</h1>
                    <div className="form-wrapper">
                        <form action="https://formspree.io/f/mpzbeoog" method="POST" className="form">
                            <div className="layout-2-column">
                                <label htmlFor="first-name">First Name</label>
                                <input type="text" name="first-name" id="first-name" required />
                            </div>
                            <div className="layout-2-column">
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" name="second-name" id="last-name" required />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" required />
                            </div>
                            <div>
                                <label htmlFor="number">Phone Number</label>
                                <input type="tel" name="number" id="number" />
                            </div>
                            <div>
                                <label htmlFor="text-area">Message Us</label>
                                <textarea name="message" id="text-area" cols="20" rows="5"></textarea>
                            </div>
                            <div className="form__checkbox">
                                <input type="checkbox" name="subscribe" id="subscribe" />
                                <label htmlFor="subscribe">Keep me up to date on news and exclusive offers</label>
                            </div>
                    
                            <button className="form__btn btn bg-accent" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}


