import Navbar from "../components/Navbar";
import Infoimage from '../assets/infoimage.svg';
import Footer from "../components/Footer";

function LandingPage(){
    return(
        <>
            <Navbar />
            <div className="App">
                <div className="appInfo">
                    <div className="infoText">
                        <p>Manage your payments using <a>Pay</a><span>me!</span> Check if you need to pay someone or if someone needs to pay you!</p>
                        <p className="infoSignup">Start now!</p>
                    </div>

                    <div className="infoImg">
                        <img src={ Infoimage } />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}


export default LandingPage;
