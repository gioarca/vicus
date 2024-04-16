import React from "react";

function Grazie() {
  return (
    <div className="my-56 flex flex-col text-center justify-center">
      <p className="text-2xl font-bold m-4">
        Grazie assai!
        <span role="img" aria-label="hi" className="h-5">
          🙏
        </span>
      </p>
      <p>La tua richiesta è stata ricevuta.</p>
      <p>Se il borgo soddisfa i requisiti minimi,</p>
      <p>provvederemo ad aggiungerlo il prima possibile.</p>
      <p></p>
    </div>
  );
}

export default Grazie;
