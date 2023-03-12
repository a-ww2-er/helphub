import "./progressLine.css";
import { TiTick } from "react-icons/ti";
import { MdCampaign, MdDone } from "react-icons/md";
import { Link } from "react-router-dom";
import { AppContext } from "../../context";
import { useContext } from "react";

const ProgressLine = ({ initialValue, maxValue, value, showExtra, id }) => {
  const { scrollFunc ,  currentCampaign, setCurrentCampaign } = useContext(AppContext);
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

  function handleclick () {
    setCurrentCampaign(id)
   scrollFunc()
  }


  // here we define what to render for each campaign page if the campaign is completed
  if (!showExtra && fixedValue >= 100) {
    return (
      <>
        {/* text above progress bar */}
        <h2>Target: {fixedValue >= 100 ? "Completed" : ` NGN ${maxValue}`}</h2>

        {/* progress bar */}
        <section className="progress_bg">
          <span
            style={{
              width: initialValue ? `${fixedValue}%` : `${actualValue}%`,
            }}
            className="progress"
          ></span>
        </section>

        {/* text */}
        <p style={{ fontSize: "1.1rem" }}>
          {" "}
          NGN {!value && !initialValue ? "0.00" : displayValue}
          <span> Donated</span>
        </p>

        {/* button which is diabled */}
        <a className="done_btn donate_btn2 btn">Donate now</a>
      </>
    );
  }
  return (
    <>
      {/* changing what text to show ABOVE the progress bar based on which page you're on */}
      {showExtra ? (
        <h2>
          NGN {!value && !initialValue ? "0.00" : displayValue}{" "}
          <span>Donated</span>
        </h2>
      ) : (
        <h3>Target: NGN {maxValue}</h3>
      )}
      {/* progress bar */}
      <section className="progress_bg">
        <span
          style={{ width: initialValue ? `${fixedValue}%` : `${actualValue}%` }}
          className="progress"
        ></span>
      </section>
      {/* changing what text to show UNDER the progress bar based on which page you're on */}
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
      {/* shows done button if campaign is completed , for the campaigns section not  the each campaign page */}
      {showExtra && fixedValue >= 100 ? (
        <p className="done_btn donate_btn2 btn">Donate now</p>
      ) : showExtra ? (
        // if showExtra is active which means we're on the each campaign page we display a button to link to donate page
        <Link to={`/donation/${id}`} className="btn donate_btn2" onClick={handleclick}>
          Donate Now
        </Link>
      ) : (
        ""
      )}
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
