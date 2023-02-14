import { useState } from 'react';
import LoginModal from './LoginModal';

function Navbar(){
    const [loginModal, setLoginModal] = useState<boolean>(false);
    const [modalMode, setModalMode] = useState<'Login' | 'Register' >('Login');

    return(
        <>
            <div className="navbar">
                <div className="LogoDiv">
                    <p className="logoImg"><span>Pay</span>me!</p>
                </div>

                <div className="actionDiv">
                    <p className="Loginbtn" onClick={() => {setLoginModal(true); setModalMode('Login')} }>Login</p>
                    <p className="Registerbtn" onClick={() => {setLoginModal(true); setModalMode('Register')} }>Register</p>
                </div>
            </div>
            { loginModal ? <LoginModal setLoginModal={setLoginModal} modalMode={ modalMode } /> : null }
        </>
    );
}

export default Navbar;
