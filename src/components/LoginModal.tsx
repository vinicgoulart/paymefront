import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginModal({ setLoginModal, modalMode }: { setLoginModal: (loginModal: boolean) => void, modalMode: 'Login' | 'Register' }){ 
    const navigate = useNavigate();
    const modalTitle = <p className="modalTitle">
        { modalMode !== 'Register' ? 'Sign in' : 'Sign up' }
    </p>;

    const signInButton = <button className="signInBtn" onClick={() => console.log('login') }>Log in</button>;
    const signUpButton = <button className="signInBtn" onClick={() => console.log('register') }>Sign up</button>;

    function handleSubmit(event: any){
        event.preventDefault();

        if(modalMode !== 'Login'){
            var userData = {
                email: event.target.emailInput.value,
                password: event.target.passwordInput.value,
                username: event.target.usernameInput.value
            };
            axios.post('http://localhost:9000/register', userData).then((res) => {
                console.log(res);
            }).catch((error: any) => {
                console.log(error);
            });
        }else{
            var data = {
                email: event.target.emailInput.value,
                password: event.target.passwordInput.value
            };

            axios.post('http://localhost:9000/login', data, {
                withCredentials: true
            }).then((res) => {
                navigate('/dashboard');
            }).catch((error: any) => {
                console.log(error);
            });
        }
    }
    
    return(
        <div className="centered">
            <form className="modal" onSubmit={handleSubmit}>
                <div className="modalHeader">
                    { modalMode !== 'Register' ? <p>Login</p> : <p>Register</p> }
                    <p className="xBtn" onClick={ () => setLoginModal(false) }>X</p>
                </div>

                <div className="modalBody">
                    { modalTitle }
                    { modalMode === 'Register' ? <input placeholder="Username" type="text" name="usernameInput" /> : null }
                    <input placeholder="Email" type="email" name="emailInput" />
                    <input placeholder="Password" type="password" name="passwordInput" />
                    <div className="modalFooter">
                        { modalMode !== 'Register' ? signInButton : signUpButton }
                        <p className="closeModalBtn" onClick={ () => setLoginModal(false) }>Close</p>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginModal;