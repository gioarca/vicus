import React from "react";

function Presentazione() {
  return (
    <div>
      <div className="m-7">
        <h1 className="font-bold text-xl m-5">Benvenuto</h1>
        <p>Qui potrai partecipare al rinascimento dei borghi d'Italia. </p>
        <p>
          Per cominciare registrati oppure se sei già registrato entra nella
          piattaforma
        </p>
      </div>
      <div>
        <img
          src="https://plus.unsplash.com/premium_photo-1676655014315-63ba125eed52?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-screen h-auto mt-5 bg-cover justify-center items-center text-center relative md:h-5/6 w-auto"
        />
        {/* <img
          src="https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXRhbHl8ZW58MHx8MHx8fDA%3D"
          alt=""
          className="w-screen h-auto mt-5 bg-cover justify-center items-center text-center relative md:h-5/6 w-auto"
        /> */}
      </div>
    </div>
  );
}

export default Presentazione;

// .book {
//   background-image: url("/assets/images/me.JPG");
//   background-size: cover;
//   justify-content: center;
//   align-items: center;
//   opacity: 60%;
//   z-index: -1;
//   position: absolute;
//   width:100%;
//   height: 500px;
// }
