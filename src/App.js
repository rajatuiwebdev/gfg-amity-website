import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Testimonials from "./pages/Testimonials";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import MainT from "./pages/Team";
import DSADiaries from "./pages/events/DSADiaries";
import ErrorPage from "./pages/errorPage";
import DSADiariesRegister from "./pages/events/DSADiariesRegister";
import ThankYou from "./pages/events/ThankYou";
import Events from "./pages/events";

function App() {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
      <Routes> 
        <Route path="/" element={ <Home/> } />
        <Route path="/testimonials" element={ <Testimonials/> } />
        <Route path="/team" element={<MainT/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/events/chatbot-construction-101" element={<DSADiaries/>}/> 
        {/* <Route path="/events/chatbot-construction-101/register" element={<DSADiariesRegister/>}/>  */}
        <Route path="/events/chatbot-construction-101/thank-you" element={<ThankYou/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>  
      </AnimatePresence>
      <Footer/>
    </>
  );
}

export default App;
