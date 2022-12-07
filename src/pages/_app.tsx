import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import localFont from '@next/font/local';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const proxima = localFont({ src: '../fonts/Proxima Nova Font.otf', variable: '--font-proxima',});
const queryClient = new QueryClient()

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={proxima.className}>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
    );
};

export default MyApp;
