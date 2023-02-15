import { useState } from 'react';
import LoginModal from './LoginModal';
import Cookies from 'js-cookie';

function Navbar(){
    const [loginModal, setLoginModal] = useState<boolean>(false);
    const [modalMode, setModalMode] = useState<'Login' | 'Register' >('Login');

    const isAuth = Cookies.get('connect.sid');
    console.log(isAuth);

    const loggedIn = <p className="logoutBtn">Logout</p>;
    const notLoggedIn = <>
        <p className="Loginbtn" onClick={() => {setLoginModal(true); setModalMode('Login')} }>Login</p>
        <p className="Registerbtn" onClick={() => {setLoginModal(true); setModalMode('Register')} }>Register</p>
    </>;

    return(
        <>
            <div className="navbar">
                <div className="LogoDiv">
                    <p className="logoImg"><span>Pay</span>me!</p>
                </div>

                <div className="actionDiv">
                    { isAuth ? loggedIn : notLoggedIn }
                </div>
            </div>
            { loginModal ? <LoginModal setLoginModal={setLoginModal} modalMode={ modalMode } /> : null }
        </>
    );
}

export default Navbar;
