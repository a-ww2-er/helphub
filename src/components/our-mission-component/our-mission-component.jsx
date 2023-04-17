import './our-mission-component.css';
import vector2 from "../../assets/Home icons and images/Vector-2.png";

export default function OurMissionComponent({img, achieved}){

    return(
        <section className="our-mission">
            <aside>
                <img src={vector2} alt="mission-icon" className='icon mission-icon'/>
                <h3>Our Mission</h3>
                <p>We are committed to making it easy for donors to find and connect with orphanage homes in need. We carefully vet and verify all of the orphanage homes listed on our website to ensure that they meet our strict standards of transparency, accountability, and child protection.</p>
                <aside className="achieved" >
                    {achieved}
                </aside>
            </aside>
            <aside className="kids">
               <img className="heroimg" src={img} alt=""/> 
            </aside>
            
        </section>
    )
}