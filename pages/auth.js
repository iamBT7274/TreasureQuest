import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "../firebase";
import "./Styles/auth.css";

const auth = getAuth(app);
const firestore = getFirestore(app);

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);
  const [quote, setQuote] = useState("Loading joke...");
  const [author, setAuthor] = useState("Fetching...");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jokeData = await response.json();
        setQuote(jokeData.setup + " - " + jokeData.punchline);
        setAuthor("Joke");
        
      } catch (error) {
        console.error("Error fetching joke:", error);
        setQuote("Failed to load content");
        setAuthor("");
      }
    };

    fetchJoke();
  }, []);

  const handleAuth = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      let userCredential;

      if (isLogin) {
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        await updateProfile(user, { displayName: name });

        await setDoc(doc(firestore, "users", user.uid), {
          uid: user.uid,
          name: name,
          email: email,
          createdAt: new Date().toISOString(),
        });
      }

      const user = userCredential.user;
      const token = await user.getIdToken();
      localStorage.setItem("authToken", token);

      navigate("/level");
    } catch (err) {
      console.error("Firebase Auth Error:", err.code, err.message);
      setError("Error: " + err.message);
    }
  };

  const playAsGuest = () => {
    navigate("/level");
  };

  return (
    <div className="auth-container">
      <div className="quote-container">
        <p className="quote">"{quote}"</p>
        <p className="author">- {author}</p>
      </div>
      <div className="auth-box">
        <h2 className="auth-title">{isLogin ? "Login" : "Sign Up"}</h2>
        {error && <p className="auth-error">{error}</p>}
        <form onSubmit={handleAuth}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="auth-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="auth-button">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="auth-toggle">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
        <button onClick={playAsGuest} className="auth-guest">
          Play as Guest
        </button>
      </div>
    </div>
  );
};

export default Auth;