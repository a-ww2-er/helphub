import './introductory-component.css';
import kids from "../../assets/Hero-photos/kids1.jpg"
export default function IntroductoryComponent(){
    return(
        <section className='introductory-component'>
            <aside>
                <h2>Connecting you to verified <span>orphanage homes</span>.</h2>
            <p>Donate to trustworthy orphanage homes and help orphans find a family and joy.</p>
            <button className='btn'>Donate Now</button>
            </aside>
            <aside>
                <img src={kids} alt='kids' />
            </aside>

        </section>
    )
}