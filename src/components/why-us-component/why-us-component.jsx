import './why-us-component.css';
import vector from "../../assets/Home icons and images/Vector.png"
import group from "../../assets/Home icons and images/Group.svg"
import blocks from "../../assets/Home icons and images/blocks.svg"

export default function WhyUsComponent(){
    // create an array of reasons why we should be trusted 
    const whyUs = [
        {
            id:0,
            areYou:"Transparent",
            img:<img src={blocks} alt="stack" className='icon'/>,
            answer:" We ensure that every donation received is used efficiently and effectively to meet the needs of the children."
        },
        {
            id:1,
            areYou:"Verified Orphanages",
            img:<img src={vector} alt='img2' className="icon img2" />,
            answer:"We vet all orphanage homes listed to ensure that they meet our strict standards transparency, accountability, and child protection."
        },
        {
            id:2,
            areYou:"Direct Impact",
            img:<img src={group} alt="handshake"  className='icon'/>,
            answer:"Donations help provide basic necessities like food and clothing, as well as educational and extracurricular opportunities."
        },
    ];

    // map through the whyUs

    const weAre = whyUs.map((each) => {

        return(
            <div key={each.id}>
                <span className='image-wrapper'>
                    <span>{each.img}</span> 
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