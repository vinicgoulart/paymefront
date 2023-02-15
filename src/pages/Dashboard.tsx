import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard(){
    return(
        <>
            <Navbar />
            <div className="App">
                <h1 className="pageTitle">Payments</h1>
                <button className="actionButton">Create new payment</button>
                <div className="card">
                    <div className="cardHeader">
                        <p>Car Payment</p>
                        <p>Payment date: 2023/02/20</p>
                    </div>
                    <div className="cardBody">
                        <p>Description: Car Payment</p>
                        <p>Value: R$4000</p>
                    </div>
                    <div className="cardFooter">
                        <p className="deleteButton">Delete</p>
                        <p className="editButton">Edit</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;