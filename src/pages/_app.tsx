import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import localFont from '@next/font/local';

const proxima = localFont({ src: '../fonts/Proxima Nova Font.otf', variable: '--font-proxima',});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={proxima.className}>
      <Component {...pageProps} />
    </main>
    );
};

export default MyApp;
