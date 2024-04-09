import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

function Borghi() {
  const [borgoImages, setBorgoImages] = useState([]);

  useEffect(() => {
    getBorgoImages();
  }, []);

  const getBorgoImages = async () => {
    const api = await fetch(
      //   `https://api.unsplash.com/photos/random?query=south-italy-village&count=10&client_id=${process.env.VITE_REACT_Unsplash_Client_ID}`
      `https://api.unsplash.com/photos/random?query=south-italy-village&count=10&client_id=e7VkzdrGfVeftJvDcSjt4M7gmsfJJqkbrDlpUC9rKCk`
    );
    const data = await api.json();
    setBorgoImages(data);
    console.log(data);
  };

  return (
    <div className="flex-col justify-center items-center text-center">
      <h1 className="text-2xl m-12">
        Immagini consigliate dei borghi del Sud Italia
      </h1>
      <Splide
        options={{
          keyboard: true,
          perPage: "1",
          arrows: true,
          pagination: false,
        }}
      >
        {borgoImages.map((image) => {
          return (
            <SplideSlide key={image.id}>
              <div className="flex-wrap justify-center w-fit rounded-large overflow-hidden shadow-xl m-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
                <Link to={"/image/" + image.id}>
                  <img
                    className="w-fit overflow-hidden m-auto"
                    src={image.urls.regular}
                    alt={image.alt_description}
                  />
                </Link>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Borghi;
