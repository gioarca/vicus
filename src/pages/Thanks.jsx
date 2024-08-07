import React from "react";

function Thanks() {
  return (
    <div className="my-56 flex flex-col text-center justify-center">
      <p className="text-2xl font-bold m-4">
        Grazie!{" "}
        <span role="img" aria-label="hi" className="h-5">
          ✨
        </span>
      </p>
      <p>Il tuo messaggio è stato ricevuto,</p>
      <p>provvederemo a risponderti il prima possibile.</p>
      <p className="m-2">Torna indietro cliccando sul logo</p>
    </div>
  );
}

export default Thanks;
