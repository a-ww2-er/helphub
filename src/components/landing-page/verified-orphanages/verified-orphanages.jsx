import './verified-orphanages.css';

export default function VerifiedOrphanages(){
    const orphanages = [
        {
            id:0,
            name:"Little Saints Orphanage",
            img:"",
            text:"A non-governmental Orphanage located in Lagos. They ensures the children have access to shelter and basic amenities like clothing and food.",
        },
        {
            id:2,
            name:"Little Saints Orphanage",
            img:"",
            text:"A non-governmental Orphanage located in Lagos. They ensures the children have access to shelter and basic amenities like clothing and food.",
        },
        {
            id:3,
            name:"Little Saints Orphanage",
            img:"",
            text:"A non-governmental Orphanage located in Lagos. They ensures the children have access to shelter and basic amenities like clothing and food.",
        },
    ]

    const verifiedOrphanage = orphanages.map((each) => {
        return(
            <div key={each.id}>
                <img src={each.img} alt={each.name} />
                <h4>{each.name}</h4>
                <p>{each.text}</p>
            </div>
        )
    })

    return(
        <section className="verified-orphanages">
            <h3>Verified orphanages homes</h3>
            <aside>
                {verifiedOrphanage}
            </aside>
        </section>
    )
}