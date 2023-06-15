import "./App.css";
import React from "react";
import { auth } from "./firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser(user);
      }
    });
  }, []);

  function register() {
    createUserWithEmailAndPassword(auth, "john@smith.com", "password123")
      .then(({ user }) => {
        console.log("registered", user.email);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    setLoading(true)
    signInWithEmailAndPassword(auth, "john@smith.com", "password123")
      .then(({ user }) => {
        console.log("logged in", user.email);
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logout() {
    signOut(auth);
    setUser({});
    console.log("logged out");
  }

  return (
    <div className="App">
      <nav>
        <figure className="nav__figure">
          <img
            className="nav__img"
            src="https://external-preview.redd.it/is-the-frontend-simplified-bootcamp-good-v0--6Ha9QUgWlcd2_wbvvljZYLwj0wLQYCqgtZ7FduPgdY.jpg?auto=webp&s=707295835138d9b250f8aa5ba6e4c08894117b77"
            alt=""
          />
        </figure>
        <ul className="nav__list">
          {loading ? (
            "loading..."
          ) : user.email ? (
            <>
              <li className="nav__li">
                <button className="nav__button" onClick={logout}>
                  {user.email[0].toUpperCase()}
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav__li">
                <button className="nav__button" onClick={register}>
                  Register
                </button>
              </li>
              <li className="nav__li">
                <button className="nav__button" onClick={login}>
                  Login
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default App;
