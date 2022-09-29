const data = [
    {   
        id: 1,
        link: "https://open.spotify.com",
        iconImage: "image/spotify.png", 
        imgAlt: "spotify logo"
    },
    {
        id: 2,
        link: "https://www.android.com/",
        iconImage: "image/android.png", 
        imgAlt: "android logo"
    },
    {
        id: 3,
        link: "https://www.ibm.com/my-en",
        iconImage: "image/ibm.png", 
        imgAlt: "ibm logo"
    },
    {
        id: 4,
        link: "https://www.coca-cola.com/",
        iconImage: "image/cocacola.png", 
        imgAlt: "cocacola logo"
    },
    {
        id: 5,
        link: "https://www.linkedin.com/",
        iconImage: "image/linkedin.png", 
        imgAlt: "linkedin logo"
    },
    {
        id: 6,
        link: "https://www.versace.com/international/en/home/?glCountry=MY",
        iconImage: "image/versace.png", 
        imgAlt: "versace logo"
    },
    {
        id: 7,
        link: "https://www.alwaysoncall.ca/",
        iconImage: "image/alwaysoncall.png", 
        imgAlt: "always on call logo"            
    },
    {
        id: 8,
        link: "https://www.yamaha-motor.com.my/",
        iconImage: "image/yamaha.png", 
        imgAlt: "yamaha logo"
    },
    {
        id: 9,
        link: "https://ddb.com/",
        iconImage: "image/ddb.png", 
        imgAlt: "ddb logo"
    },
    {
        id: 10,
        link: "https://www.interac.ca/en/",
        iconImage: "image/interac.png", 
        imgAlt: "interac logo"            
    }
]

export default function Brands() {
    const element = data.map((item) => {
        return (
            <a 
                key={item.id} 
                href={item.link}
                className="logo"
            >
                <img src={item.iconImage} alt={item.imgAlt} />
            </a>
        )
    })

    return element
}


        
            
              
                    