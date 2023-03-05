import './progress-indicator.css';

export default function Indicator(){
    return(
        <section className="indicator">
            <div className="circle"></div>
            <div className="line-through"></div>
            <div className="circle circle-2"></div>
            <div className="line-through"></div>
            <div className="circle"></div>
        </section>
    )
}