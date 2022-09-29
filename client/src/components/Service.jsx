const data = [
    {
        id: 1,
        coverImg: "image/celebrate.png",
        imgAlt: "A celebration icon",
        title: "Event",
        paragraph: "Providing Canada's most delicious cupcakes for business meetings, birthdays, weddings, or for no other reason than because."
    },
    {
        id: 2,
        coverImg: "image/quality.png",
        imgAlt: "A badge icon",
        title: "Quality",
        paragraph: "Our cupcakes are baked daily using the finest ingredients."
    },
    {    
        id: 3, 
        coverImg: "image/shipping.png",
        imgAlt: "A drone shipping a parcel",
        title: "Shipping",
        paragraph :"Cupcake delivery is available throughout Toronto, the GTA, and beyond. Cupcakes are delivered in our signature pink box."
    }
]

export default function Service() {
    const elements = data.map(item => {
        return (
            <div className="service__section" key={item.id}>
                <div className="icon-container bg-pink">
                    <img className="icon" src={item.coverImg} alt={item.imgAlt} />
                </div>
                <h3 className="fs-700 color-heading">{item.title}</h3>
                <p>{item.paragraph}</p>
            </div>
        )
    })

    return elements
}