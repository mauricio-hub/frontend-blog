import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Header } from "../Header";
import Loading from "../Loading/";
import { usePostData } from "../../context/PostProvider";

export const Banner = () => {
  const { showPostActual, loading, error } = usePostData();

  if (loading) {
    return <Loading type="spin" color="#000" />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Header />

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {showPostActual.map((post, index) => (
          <SwiperSlide key={index}>
            <img
              src={post.miniature}
              alt={post.title}
              className="image-cover"
            />
            <div className="slide-overlay">
              <h1 className="multiline-title">{post.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
