import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Header } from "../Header";
import useFetch from "../../hooks/useFetch";

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
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log("ultimos post...", showPostActual);

  return (
    <>
      <Header />

      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {showPostActual.map((post, index) => (
          <SwiperSlide key={index}>
            <div>
              <img src={post.miniature} alt={post.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
