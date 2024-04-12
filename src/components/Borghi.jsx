import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Borghi() {
  const [borghi, setBorghi] = useState([]);

  const getBorghi = async () => {
    try {
      // const check = localStorage.getItem("Borghi");

      //   if (check) {
      //     setBorghi(JSON.parse(check));
      //   } else {
      const api = await fetch(
        `https://api.unsplash.com/search/photos?query=borgo&client_id=Nh26XR6ZtdOuVFAPnqXkOLobp0ei6e4WBl0peMyfbns`
      );
      const data = await api.json();
      // localStorage.setItem("Borghi", JSON.stringify(data.results));
      setBorghi(data.results);
      console.log(data.results);
      // }
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
    }
  };

  useEffect(() => {
    getBorghi();
  }, []);

  return (
    <div className="flex-col justify-center items-center text-center">
      <h1 className="text-2xl m-12">I borghi consigliati</h1>
      <Splide
        options={{
          keyboard: true,
          perPage: 1,
          arrows: true,
          pagination: false,
        }}
      >
        {borghi.length > 0 && // Aggiungi questa verifica
          borghi.map((borgo) => (
            <Splide
              options={{
                keyboard: true,
                perPage: 1,
                arrows: true,
                pagination: false,
              }}
            >
              {borghi.length > 0 && // Aggiungi questa verifica
                borghi.map((borgo) => (
                  <SplideSlide key={borgo.id}>
                    <div className="flex flex-col items-center w-fit rounded-lg overflow-hidden shadow-xl m-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
                      <img
                        className="w-full h-auto"
                        src={borgo.urls.small}
                        alt={borgo.alt_description || "Borgo"}
                      />
                      <h4 className="text-xl m-4">
                        {borgo.alt_description || "Borgo"}
                      </h4>
                    </div>
                  </SplideSlide>
                ))}
            </Splide>
          ))}
      </Splide>
    </div>
  );
}

export default Borghi;
