import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { CardBlog } from '../Card';
import useFetch from '../../hooks/useFetch';
import Loading from "../Loading";


export const GridCards = ()=> {
  const { data, loading, error } = useFetch("http://localhost:9000/api/post/");
  const [showPostActual, setShowPostActual] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      // Ordenar los post por fecha
     const lastPost = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      // Post actuales
     
      setShowPostActual(lastPost);
    }
  }, [data, loading, error]);

  if (loading) {
    return <Loading type="spin" color="#000" />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(showPostActual);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }}  styled={{backgroundColor: 'red'}} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index} 
           
          >
           
               {
                     showPostActual.map((post, index) => (
                        <CardBlog
                        key={index}
                        imgUrl={post.miniature}
                        title={post.title}
                        descrption={post.content}
                        slug={post.slug}
                        />
                        ))
               }
         
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}