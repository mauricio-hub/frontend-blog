import React, { useState, useEffect, createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";


// Crear un contexto para compartir los datos
const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const { data, loading, error } = useFetch("http://localhost:9000/api/post/");
  const [showPostActual, setShowPostActual] = useState([]);
  const [allPost, setAllPost] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      // Ordenar los post por fecha
      data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      // Post actuales
      const postActuales = data.slice(0, 3);
      
      setShowPostActual(postActuales);
      setAllPost(data);
    }
  }, [data, loading, error]);

  return (
    <PostContext.Provider value={{ allPost,showPostActual, loading, error }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostData = () => {
  return useContext(PostContext);
};
