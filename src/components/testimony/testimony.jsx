import './testimony.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import img1 from '../../assets/Home icons and images/img1.png'
import img2 from '../../assets/Home icons and images/img2.png'
import img3 from '../../assets/Home icons and images/img3.png'

export default function Testimony(){
    const [id, setId] = useState(0);
    const [width] = useState(window.innerWidth)

    // function for next testimony on mobile
    function next(){
        if(id === (testimonies.length - 1)){
            return
        }else{
            setId((prev) => prev + 1)
        }
    }

     // function for prev testimony on mobile
     function prev(){
        if(id === (testimonies.length - testimonies.length)){
            return
        }else{
            setId((prev) => prev - 1)
        }
    }


    const testimonies = [
        {
            id:0,
            name:"Joyce Alex",
            img:img1,
            testimony:"I have been volunteering at XYZ Orphanage Home for the past year, and it has been an incredibly rewarding experience.. I have seen firsthand the impact that their programs and services have on the children's lives, and it is truly inspiring.",
            location:"Lagos, Nigeria",
        },
        {
            id:1,
            name:"Chidi Blessing",
            img:img2,
            testimony:"I have been volunteering at XYZ Orphanage Home for the past year, and it has been an incredibly rewarding experience.. I have seen firsthand the impact that their programs and services have on the children's lives, and it is truly inspiring.",
            location:"Lagos, Nigeria",
        },
        {
            id:2,
            name:"David Monroe",
            img:img3,
            testimony:"I have been volunteering at XYZ Orphanage Home for the past year, and it has been an incredibly rewarding experience.. I have seen firsthand the impact that their programs and services have on the children's lives, and it is truly inspiring.",
            location:"Lagos, Nigeria",
        },
    ];

    const testimony = testimonies.map((each) => {
        return(
            <aside key={each.id}>
                <div>
                    <img src={each.img} alt={each.name} />
                    <span>
                        <h6>{each.name}</h6>
                        <p>{each.location}</p>
                    </span>
                </div>
                <p>{each.testimony}</p>
            </aside>
        )
    })

    return(
        <section className="testimony">
            <h5>testimony</h5>
            <h3>What Our Users Are Saying</h3>
            {width > 739 ? <aside>
                {testimony}
            </aside> : 
            <aside>
                 <aside>
                <div>
                    <img src={testimonies[id].img}  alt={testimonies[id].name} />
                    <span>
                        <h6>{testimonies[id].name}</h6>
                        <p>{testimonies[id].location}</p>
                    </span>
                </div>
                <p>{testimonies[id].testimony}</p>
            </aside>
            </aside>
            }
            {width < 740 ? <div className="control-icon">
              <span onClick={prev}><FaArrowLeft className='left arrow' /></span>  
               <span onClick={next}><FaArrowRight className='right arrow' /></span> 
            </div> : ""}
        </section>
    )
}