import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { NavBar } from "../src/components/NavBar/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
