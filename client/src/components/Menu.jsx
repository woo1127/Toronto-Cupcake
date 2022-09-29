import { HashLink } from 'react-router-hash-link'

const data = [
    {
        id: 1,
        coverImg: "image/available.jpg",
        imgAlt: "Cupcakes on a pink table",
        title: "Always Available",
        paragraph: "Pick out 12 always available cupcakes",
        link: "/Cupcakes#available", 
    },
    {
        id: 2,
        coverImg: "image/holiday.jpg", 
        imgAlt: "Cupcake with the christmas theme",
        title: "Holidays",
        paragraph: "Special Holiday cupcakes are individually priced",
        link: "/Cupcakes#holidays-events"
    },
    {
        id: 3,
        coverImg: "image/event.png", 
        imgAlt: "Flower beside by a gift",
        title: "Special Events",
        paragraph: "Weddings, engagements, or other special occasions",
        link: "/Cupcakes#holidays-events"
    },
    {
        id: 4,
        coverImg: "image/custom.png", 
        imgAlt: "A custom cupcake",
        title: "Custom",
        paragraph: "Your customised logo cupcakes",
        link: "/Cupcakes#custom",
    }
]

export default function Menu() {
    const elements = data.map((item) => {
        return (
            <div className="menu__section" key={item.id}>
                <img src={item.coverImg} alt={item.imgAlt} className="menu__image" />

                <div className="menu__content">
                    <h3 className="fs-700 color-heading">{item.title}</h3>
                    <p>{item.paragraph}</p>
                    <HashLink to={item.link} style={{textDecoration: 'None'}}>
                        <span className="btn bg-accent menu__btn">Shop Now</span>
                    </HashLink>
                </div>
            </div>
        )
    })

    return elements
}