import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { NavBar } from "../src/components/NavBar/NavBar";
import { Footer } from "../src/components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <div className="w-full min-h-screen dark:bg-gray-800">
        <div className="container mx-auto px-2 xl:px-32 pt-5 h-full">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default MyApp;
