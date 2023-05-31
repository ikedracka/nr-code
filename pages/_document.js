import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script"

import getAnrScript from '../utils/anr'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Script 
            id="atlas-new-relic" 
            dangerouslySetInnerHTML={{ __html: getAnrScript() }} 
            strategy="beforeInteractive"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
