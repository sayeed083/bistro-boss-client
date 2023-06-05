import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInGoogleUser = result.user;
                console.log(loggedInGoogleUser);

                const saveUser = { name: loggedInGoogleUser.displayName, email: loggedInGoogleUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })









            })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="w-full text-center my-4">
                <button onClick={handleGoogleSignIn} className="btn btn-square btn-outline">
                    <FaGoogle></FaGoogle>
                </button>

            </div>

        </div>
    );
};

export default SocialLogin;