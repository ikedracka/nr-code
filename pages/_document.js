import Document, { Html, Head, Main, NextScript } from "next/document";
import getAnrScript from '../utils/anr'
import Script from "next/script"

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
