import Navbar from "../../Components/navbar";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";

export default function Homepage(){

    return(
        <>
        <div className="homepage">
        <Navbar/>
        <FeatureSection/>
        <Footer/>
        </div>
        </>
    )
}