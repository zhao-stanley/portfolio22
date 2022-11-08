import "../../styles/globals.css";
import { ThemeProvider } from "next-themes";
import NProgress from "nprogress";
import Router from "next/router";
import siteMetadata from "../data/siteMetadata";
import Navbar from "../components/global/Navbar";

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = (url) => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.defaultTheme}>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
