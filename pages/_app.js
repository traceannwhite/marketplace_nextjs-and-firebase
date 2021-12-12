import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import NavBar from "../components/NavBar";
import Meta from "../components/Meta";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Meta />
      <NavBar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
