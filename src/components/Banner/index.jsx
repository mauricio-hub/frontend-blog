import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Header } from "../Header";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/";

export const Banner = () => {
  const { data, loading, error } = useFetch("http://localhost:9000/api/post/");
  const [showPostActual, setShowPostActual] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      // Ordenar los post por fecha
      data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      // Post actuales
      const postActuales = data.slice(0, 3);
      setShowPostActual(postActuales);
    }
  }, [data, loading, error]);

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
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, // Para que no se detenga al interactuar con el carrusel
        }}
        loop={true} // Bucle infinito
        effect="fade" // Efecto de transición
      >
        {showPostActual.map((post, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div
              style={{
                maxWidth: "1500px",
                maxHeight: "1500px",
              }}
            >
              <img
                src={post.miniature}
                alt={post.title}
                className="swiper-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
