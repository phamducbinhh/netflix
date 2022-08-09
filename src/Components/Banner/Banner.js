import React from "react";
import BannerItem from "./BannerItem";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import useFetchData from "../../Hooks/useFetchData";

const Banner = () => {
  //custom hook
  const { movies } = useFetchData("upcoming");

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
