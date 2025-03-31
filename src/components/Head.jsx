import { Helmet, HelmetProvider } from "react-helmet-async";

function Head() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="stylesheet" href="App.css" />
        <title className="font-bold">Vicus</title>
      </Helmet>
    </HelmetProvider>
  );
}

export default Head;
