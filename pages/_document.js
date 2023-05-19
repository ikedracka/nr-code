import Document, { Html, Head, Main, NextScript } from "next/document";
import { getAnrScript } from "../utils/anr"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {getAnrScript()}
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
