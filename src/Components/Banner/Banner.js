import React, {  useEffect } from "react";
import BannerItem from "./BannerItem";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { API } from "../Api/ConfigApi";

const Banner = () => {
  const [movies, setMovies] = React.useState([]);
  useEffect(() => {
    const getData = async () => {
      const respones = await fetch(API.getBanner());
      const data = await respones.json();
      setMovies(data.results);
    };
    getData();
  }, []);

  return (
    <>
      <section className="banner h-[400px] page-container mb-20 overflow-hidden">
        <Swiper
          grabCursor={true}
          slidesPerView="auto"
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
        >
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <BannerItem data={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </>
  );
};

export default Banner;
