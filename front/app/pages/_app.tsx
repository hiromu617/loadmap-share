import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { NavBar } from "../src/components/NavBar/NavBar";
import { Footer } from "../src/components/Footer/Footer";
import { LoginModalProvider } from "../src/context/LoginModalContext";
import { CurrentUserProvider } from "../src/context/CurrentUserContext";
import { LoginModal } from "../src/components/LoginModal/LoginModal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CurrentUserProvider>
      <LoginModalProvider>
        <LoginModal />
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </LoginModalProvider>
    </CurrentUserProvider>
  );
}
export default MyApp;
