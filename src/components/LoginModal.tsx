function LoginModal({ setLoginModal, modalMode }: { setLoginModal: (loginModal: boolean) => void, modalMode: 'Login' | 'Register' }){ 
    
    const modalTitle = <p className="modalTitle">
        { modalMode !== 'Register' ? 'Sign in' : 'Sign up' }
    </p>;

    const signInButton = <button className="signInBtn" onClick={() => console.log('login') }>Log in</button>;
    const signUpButton = <button className="signInBtn" onClick={() => console.log('register') }>Sign up</button>;
    
    return(
        <div className="centered">
            <div className="modal">
                <div className="modalHeader">
                    { modalMode !== 'Register' ? <p>Login</p> : <p>Register</p> }
                    <p className="xBtn" onClick={ () => setLoginModal(false) }>X</p>
                </div>

                <div className="modalBody">
                    { modalTitle }
                    { modalMode === 'Register' ? <input placeholder="Username" type="text" /> : null }
                    <input placeholder="Email" type="email" />
                    <input placeholder="Password" type="password" />
                    <div className="modalFooter">
                        { modalMode !== 'Register' ? signInButton : signUpButton }
                        <p className="closeModalBtn" onClick={ () => setLoginModal(false) }>Close</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;