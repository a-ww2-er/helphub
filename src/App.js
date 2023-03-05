import { Routes, Route } from "react-router-dom";
//pages
import Orphanages from "./pages/orphanages-page/Orphanages";
import LandingPage from "./pages/landing-page/landing-page";
import DonationPage from "./pages/donation-page/donation-page";
import DonationAmount from "./components/donation-amount/donation-amount";
import DonorInformation from "./components/donor-information/donor-information";
import PaymentDetail from "./components/payment-details/payment-details";
import Error from "./pages/error-page/Error";
import EachOrphanages from "./pages/each-orphanages-page/EachOrphanages";
import ThankYou from "./components/thank-you/thank-you";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/donation" element={<DonationPage />} />
        <Route path="donation/donation-amount" element={<DonationAmount />} />
        <Route path="donation/donor-information" element={<DonorInformation />} />
        <Route path="donation/payment" element={<PaymentDetail />} />
        <Route path="donation/payment/thank-you" element={<ThankYou />} />
      <Route path="/orphanages" element={<Orphanages />}></Route>;
      <Route path="/orphanages/:id" element={<EachOrphanages />}></Route>;
      {/* error page */}
      <Route path="*" element={<Error />}></Route>;
    </Routes>
  );
}

export default App;
