import './our-mission-component.css';

export default function OurMissionComponent(){
    // create an array of achievement 
    const achievement = [
        {
            id:0,
            achieve:"Completed Projects",
            number:20,
        },
        {
            id:1,
            achieve:"Orphanage Homes",
            number:30,
        },
        {
            id:2,
            achieve:"Orphans Homes",
            number:500,
        },
    ]

    // map through achievement and reture a div for each object 

    const achieved = achievement.map((each) => {
        return(
            <div key={each.id}>
                <h4>{each.number}</h4>
                <p>{each.achieve}</p>
            </div>
        )
    })
    return(
        <section className="our-mission">
            <aside>
                <img src="" alt="mission-icon" />
                <h3>Our Mission</h3>
                <p>We are committed to making it easy for donors to find and connect with orphanage homes in need. We carefully vet and verify all of the orphanage homes listed on our website to ensure that they meet our strict standards of transparency, accountability, and child protection.</p>
                <aside>
                    {achieved}
                </aside>
            </aside>
            <aside>
               <img src="" alt="happy kids"/> 
            </aside>
            
        </section>
    )
}