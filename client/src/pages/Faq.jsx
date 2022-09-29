import '../styles/faq.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const datas = [
    {
        id: 1,
        title: "ORDERING",
        contents: [
            {
                question: "How much time htmlFor a custom order?",
                answer: `It would be very helpful if you could give a minimum of 48 hours notice when 
                        ordering something special. htmlFor personalised stamping such as initials or 
                        logos please call or email us.`,
            },
            {
                question: "What is the smallest order I can make?",
                answer: "Minimum order is 1/2 dozen cupcakes.",
            },
            {
                question: "What are my options htmlFor payment?",
                answer: `We will accept cheque, money orders, all major credit cards, and paypal. 
                        We can also accept payment via email interac transaction (Canada only).`
            },
            {
                question: "When and how do I pay?",
                answer: `Payment is due when you receive your invoice via email. After you have successfully 
                        completed an order you will receive an order confirmation email from Toronto Cupcake. 
                        Shortly afterwards you will be sent an invoice that can be paid online.`
            }
        ]
    },
    {
        id: 2,
        title: "DELIVERING/PICK UP/SENDING",
        contents: [
            {
                question: "Does Toronto Cupcake deliver?",
                answer: `Yes! Toronto Cupcake delivers to all locations in the GTA and surrounding areas. 
                        The minimum order htmlFor delivery is 1/2 dozen. Delivery to most downtown Toronto postal 
                        codes is $13.00. We deliver to a radius of approximately 80KM from downtown Toronto. 
                        If you need a delivery outside of this area please contact us. Delivery windows are 
                        8-noon and noon-6 within Toronto. Outside of Toronto is noon-6.`
            },
            {
                question: "What is the earliest time I can get delivery?",
                answer: `Our earliest delivery window is 8am to noon. Our latest delivery window is noon to 
                        6pm, 7 days a week. If you need something outside of this delivery schedule please 
                        call or email us and we will try to accommodate.`
            },
            {
                question: "Can I pick up my cupcakes?",
                answer: `Yes!Please contact us to make arrangements.`
            },
            {
                question: ">How if the person is not at home?",
                answer: `When you order you will be asked to provide a contact name and number at the deliver 
                        to location. It is your responsibility to make sure someone will be at the delivery 
                        location during the delivery time. We do our best to leave the delivery with someone 
                        or indoors. On occasion we may leave your delivery at the door.`
            }
        ]
    },
    {   
        id: 3,
        title: "INGREDIENTS",
        contents: [
            {
                question: "Does Toronto Cupcakes have gluten-free cupcakes?",
                answer: "Yes,by special order.Please contact us. There is a minimum order of a dozen."
            },
            {
                question: "What colours do you have?",
                answer: "As we hand-make our own colours we can do any colour!"
            },
            {
                question: "Do you offer special icing colours?",
                answer: `Yes, we do offer special icing colours. Please try and give us as much advanced 
                        notice as you can when requesting special colours and we will do our best to 
                        accommodate.`
            },
            {
                question: "Are Toronto Cupcakes products nut free?",
                answer: `Toronto Cupcake is NOT a nut-free kitchen. Several of our flavours use peanuts or 
                        other nut products. We recommend that customers with severe nut allergies err on the 
                        side of caution and not eat our cupcakes.`
            }
        ]
    },
    {
        id: 4,
        title: "OTHERS",
        contents: [
            {
                question: "How do I store my cupcakes?",
                answer: `If you are planning on eating them within a day you can store them at room 
                        temperature. If you are not going to eat them right away you can freeze them. 
                        To thaw them, take them out of the freezer and cover them lightly with plastic wrap 
                        while they thaw. This will minimize condensation htmlForming on the cupcakes. They should 
                        be ready to eat in about an hour.You should not refrigerate your cupcakes overnight 
                        because they will dry out.`
            },
            {
                question: "Are you able to personalise cupcakes?",
                answer: `Challenge us!! We are so excited to create personalised cupcakes htmlFor you. From 
                        traditional hand stamped initials or logos to hand moulded 3D characters we are up 
                        to the task. Check out our occasions page to see some of our work. Please give us a 
                        call or email to discuss your ideas.`
            },
            {
                question: "Do I need to order my cupcakes in advance?",
                answer: `Not at all, unless you would like to have something specially made htmlFor you.
                        It would be very helpful if you could give a minimum of 48 hours notice when ordering 
                        something special. htmlFor our store locations and hours, please click here.`
            }
        ]
    }
]

export default function Faq() {
    const elements = datas.map((data) => {
        return (
            <>
                <h1 key={data.id}>{data.title}</h1>
                {
                    data.contents.map((item, index) => {
                        return (
                            <li key={index}>
                                <label htmlFor={item.question}>
                                    {item.question}
                                    <span>&#x3e;</span>
                                </label>
                                <input type="checkbox" name="accordion" id={item.question} />
                                <div className="content">
                                    <p>{item.answer}</p>
                                </div>
                            </li>
                        )
                    })
                }
                &nbsp;
            </>
        )
    })

    return (
        <>
            <Header />
            <ul className="accordion">
                {elements}
            </ul>
            <Footer />
        </>
    )
}
