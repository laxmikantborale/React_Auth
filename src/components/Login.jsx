import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import GoogleButton from "react-google-button";

// import '../App'



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login, googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await login(email, password);
            navigate("/home");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/home");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <div className="login_container">
                <h2 className="mb-3">Firebase Auth Login</h2>
                {error && <p variant="danger">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" onChange={(e)=> setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password"  onChange={(e)=> setPassword(e.target.value)}/>
                    <button type="submit">Login</button>
                </form>
                <hr />
                <div>
                    <GoogleButton
                        className="g-btn"
                        type="dark"
                        onClick={handleGoogleSignIn}
                    />
                </div>
            </div>
            <div className="toSignup">
                Don't have an account? <Link to="/signup">Sign up</Link>
            </div>
        </>
    );
};

export default Login;