import { Helmet, HelmetProvider } from "react-helmet-async";

function Head() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <link rel="stylesheet" href="App.css" />
        <title>Borghi</title>
      </Helmet>
    </HelmetProvider>
  );
}

export default Head;
