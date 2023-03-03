
import {Routes, Route } from "react-router-dom";
//pages
import Orphanages from "./pages/orphanages-page/Orphanages";
import LandingPage from "./pages/landing-page/landing-page";
import Error from "./pages/error-page/Error";
import EachOrphanages from "./pages/each-orphanages-page/EachOrphanages";


function App() {
  return(
  <Routes>
    <Route path="/" element={<LandingPage />}></Route>;
    <Route path="/orphanages" element={<Orphanages />}></Route>;
    <Route path="/orphanages/:id" element={<EachOrphanages/>}></Route>;
    {/* error page */}
    <Route path="*" element={<Error />}></Route>;

  </Routes> 
  )

}

export default App;
