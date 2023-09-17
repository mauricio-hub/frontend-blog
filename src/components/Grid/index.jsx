import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { CardBlog } from "../Card";
import Loading from "../Loading";
import { usePostData } from "../../context/PostProvider";
import { formatDate } from "../../util";
import Container from '@mui/material/Container';
export const GridCards = () => {
  const { allPost, loading, error } = usePostData();
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + " ...";
    }
    return text;
  };

  if (loading) {
    return <Loading type="spin" color="#000" />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const categories = allPost.map((post) => post.category.title);

  const uniqueCategories = [...new Set(categories)];
  uniqueCategories.unshift("Post recientes");

  const clickCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };


  //array que contiene las publicaciones filtradas
  const publicacionesFiltradas = categoriaSeleccionada
    ? allPost.filter((post) => post.category.title === categoriaSeleccionada)
    : allPost;

  return (
    <Container sx={{ flexGrow: 1, marginTop: 20, marginBottom: 20 }}>
   
      <h2>Post recientes</h2>

      <ul style={{ marginBottom: "20px" }} className="row">
        {uniqueCategories.map((categoria, index) => (
          <li
            key={index}
            onClick={() => clickCategoria(categoria)}
            style={{
              cursor: "pointer",
              color:
                categoria === categoriaSeleccionada ? "#D4A373" : "#495057",
            }}
          >
            {categoria}
          </li>
        ))}
      </ul>

 
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          styled={{ backgroundColor: "red" }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {categoriaSeleccionada === "Post recientes"
            ? allPost.map((post, index) => (
                <Grid xs={2} sm={4} md={4} key={index}>
                  <CardBlog
                    key={index}
                    date={formatDate(post.created_at)}
                    imgUrl={post.miniature}
                    title={post.title}
                    descrption={truncateText(post.content, 30)}
                    slug={post.slug}
                  />
                </Grid>
              ))
            : publicacionesFiltradas.map((post, index) => (
                <Grid xs={2} sm={4} md={4} key={index}>
                  <CardBlog
                    key={index}
                    date={formatDate(post.created_at)}
                    imgUrl={post.miniature}
                    title={post.title}
                    descrption={truncateText(post.content, 30)}
                    slug={post.slug}
                  />
                </Grid>
              ))}
        </Grid>
   

    </Container>
  );
};
