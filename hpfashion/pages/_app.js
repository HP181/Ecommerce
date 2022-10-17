import "../styles/globals.css";
import Navbar from "../Components/Navbar";
import UserState from "../Context/UserContext/UserState";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserState>
        <Navbar />
        <Component {...pageProps} />
      </UserState>
    </>
  );
}

export default MyApp;
