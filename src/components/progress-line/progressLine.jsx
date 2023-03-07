import "./progressLine.css";
import { TiTick } from "react-icons/ti";
import { MdCampaign, MdDone } from "react-icons/md";
import { Link } from "react-router-dom";
import { AppContext } from "../../context";
import { useContext } from "react";

const ProgressLine = ({ initialValue, maxValue, value, showExtra, id }) => {
  const { scrollFunc } = useContext(AppContext);
  const actualValue = Math.round((value / maxValue) * 100);
  const fixedValue = Math.round(((initialValue + value) / maxValue) * 100);
  const displayValue = initialValue + value;
  console.log(actualValue, fixedValue, showExtra, !showExtra);

  // if (fixedValue >= 100) {
  //   return (
  //     <section className="completed_donation">
  //       <MdDone className="icon" />
  //       <p> This Campaign has been completed</p>

  //     </section>
  //   );
  // }
  if (!showExtra && fixedValue >= 100) {
    return (
      <>
        <h2>
        Target: {fixedValue >= 100 ? "Completed" : ` NGN ${maxValue}`}
        </h2>

        <section className="progress_bg">
          <span
            style={{
              width: initialValue ? `${fixedValue}%` : `${actualValue}%`,
            }}
            className="progress"
          ></span>
        </section>

        <p style={{ fontSize: "1.1rem" }}>  NGN {!value && !initialValue ? "0.00" : displayValue}
          <span> Donated</span>
         
        </p>
        <p className="done_btn donate_btn2 btn">Donate now</p>
      </>
    );
  }
  return (
    <>
      {showExtra ? (
        <h2>
          NGN {!value && !initialValue ? "0.00" : displayValue}{" "}
          <span>Donated</span>
        </h2>
      ) : (
        <h3>Target: NGN {maxValue}</h3>
      )}
      <section className="progress_bg">
        <span
          style={{ width: initialValue ? `${fixedValue}%` : `${actualValue}%` }}
          className="progress"
        ></span>
      </section>
      {showExtra ? (
        <p style={{ fontSize: "1.5rem" }}>
          Target: {fixedValue >= 100 ? "Completed" : ` NGN ${maxValue}`}
        </p>
      ) : (
        <p style={{ fontSize: "1.1rem", margin: "0" }}>
          NGN {!value && !initialValue ? "0.00" : displayValue}{" "}
          <span>Donated</span>
        </p>
      )}
      {/* shows done button if campaign is completed , for the campaigns section not each campaign page */}
      {showExtra && fixedValue >= 100 ? <p className="done_btn donate_btn2 btn">Donate now</p> : showExtra ? (
        <Link to={`/donation/${id}`} className="btn donate_btn2">
          Donate Now
        </Link>
      ) : ""}
      {/* shows a button to link to each campaign page in the campaigns section  */}
      {showExtra || (
        <Link
          to={`/orphanages/campaign/${id}`}
          className="btn donate_btn2"
          onClick={scrollFunc}
        >
          Donate Now
        </Link>
      )}
    </>
  );
};

export default ProgressLine;
