const data = [
    {
        id: 1,
        image: "image/ibmlogo.png", 
        imgAlt: "ibm logo cupcake",
        title: "IBM logo",
        paragraph: `IBM uses these Toronto Cupcakes for Customer meetings and Thank you gifts.
                    We package your message in boxes of 12, 6, 4 or 1 depending on your marketing needs.`
    },
    {
        id: 2,
        image: "image/androidlogo.png", 
        imgAlt: "android logo cupcake",
        title: "Android logo",
        paragraph: `Our friends at the local cell phone store ordered these hand, die-cut droids for a 
                    2 day event celebrating the most recent incarnation of Android.`
    },
    {
        id: 3,
        image: "image/alwaysoncalllogo.png",
        imgAlt: "android logo cupcake",
        title: "Always On Call logo",
        paragraph: `Always on Call wanted to thank their clients for choosing Always on Call for their on 
                    the road support needs.`
    }
]

export default function Testimonial() {
    const elements = data.map((item) => {
        return (
            <div className="testimonial" key={item.id} data-aos="fade-up">
                <div>
                    <img 
                        className="testimonial-image" 
                        src={item.image} 
                        alt={item.imgAlt} 
                    />
                    <h3 className="fs-600 ff-sans-serif color-body center-text">{item.title}</h3>
                    <p className="fs-500 ff-sans-serif color-body testimonial-text">{item.paragraph}</p>
                </div>
            </div>
        )
    })

    return elements
}





        
            
        
    

    
        
            

        
            

        
    