import './why-us-component.css';

export default function WhyUsComponent(){
    // create an array of reasons why we should be trusted 
    const whyUs = [
        {
            id:0,
            areYou:"Transparent",
            img:"",
            answer:" We ensure that every donation received is used efficiently and effectively to meet the needs of the children."
        },
        {
            id:1,
            areYou:"Verified Orphanages",
            img:"",
            answer:"We vet all orphanage homes listed to ensure that they meet our strict standards transparency, accountability, and child protection."
        },
        {
            id:2,
            areYou:"Direct Impact",
            img:"",
            answer:"Donations help provide basic necessities like food and clothing, as well as educational and extracurricular opportunities."
        },
    ];

    // map through the whyUs

    const weAre = whyUs.map((each) => {

        return(
            <div key={each.id}>
                <span className='image-wrapper'>
                   <img src={each.img} alt={each.areYou} /> 
                </span>
                <h3>{each.areYou}</h3>
                <p>{each.answer}</p>
            </div>
        )
    })
    return(
        <section className="why-us">
            {weAre}
        </section>
    )
}