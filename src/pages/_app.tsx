import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "nextjs-google-analytics";
import ColorProvider from "@utils/colorConfigContext";
import { ApolloProvider } from "@apollo/client";
import client from "@utils/apollo-client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics
        trackPageViews
        gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
      />
      <ApolloProvider client={client}>
        <ColorProvider>
          <Component {...pageProps} />
        </ColorProvider>
      </ApolloProvider>
    </>
  );
}
