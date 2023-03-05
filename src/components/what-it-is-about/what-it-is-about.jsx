import { highLights } from '../../highLight-data';
import kids from "../../assets/donation-photo/Rectangle 15.png"
import './what-it-is-about.css';

export default function WhatItIsAbout(){

    const highLight = highLights.map((each) => {

        return(
            <p key={each.id}>{each.text}</p>
        )
    })

    return(
        <section className="what-it-is-about">
            <aside>
                <img src={kids} alt="happy kid" />
                <h3>Educating 200 Orphans</h3>
                {highLight}
                <h4>Target: NGN 1,000,000</h4>
            </aside>
        </section>
    )
}